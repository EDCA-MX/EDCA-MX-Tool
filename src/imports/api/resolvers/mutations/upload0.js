import XLSX from 'xlsx';
import merge from 'lodash/merge';
import map from 'lodash/map';
import assign from 'lodash/assign';
import find from 'lodash/find';
import helper from '../helpers';

import File0 from '../../collections/file0';

const removeEmpty = obj =>
  Object.keys(obj).filter(f => obj[f] != null).reduce(
    (r, i) =>
      typeof obj[i] === 'object'
        ? { ...r, [i]: removeEmpty(obj[i]) } // recurse.
        : { ...r, [i]: obj[i] },
    {}
  );

export default function upload0(root, { file }) {
  let workbook = XLSX.readFile(file.path);
  let data = [];

  data.push(
    workbook.SheetNames.map(name => {
      let value = {};
      name !== 'Instrucciones' && name !== 'listas-desplegables' && name !== 'Accionistas'
        ? (value = helper(workbook.Sheets[name]))
        : (value = {});
      return value;
    })
  );

  const allSheets = merge({}, ...data[0]);
  let relatedProcesses = allSheets.relatedProcesses; // Aqui se filtran todos los undefined
  allSheets.relatedProcesses = relatedProcesses.filter(n => n != undefined);
  let parties = allSheets.parties;
  allSheets.parties = parties.filter(n => n != undefined);

  let accionistas = helper(workbook.Sheets.Accionistas).parties; // Aqui se une a los accionistas (solo en caso de existir)
  if (accionistas !== undefined) {
    accionistas = accionistas.filter(n => n != undefined);
    let mergedParties = map(allSheets.parties, obj =>
      assign(
        obj,
        find(accionistas, {
          id: obj.id,
        })
      )
    );
    allSheets.parties = mergedParties;
  }

  const _id = File0.find().fetch()[0]._id;
  File0.update({ _id: _id }, { $set: allSheets });
}
