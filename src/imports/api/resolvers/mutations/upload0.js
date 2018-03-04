import XLSX from 'xlsx';
import merge from 'lodash/merge';
import map from 'lodash/map';
import assign from 'lodash/assign';
import find from 'lodash/find';

import groupBy from 'lodash/groupBy';
import helper from '../helpers';
import acc from '../helpers/acc';

import File0 from '../../collections/file0';

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

  if (relatedProcesses) {
    allSheets.relatedProcesses = relatedProcesses.filter(n => n != undefined);
  }

  let parties = allSheets.parties;
  allSheets.parties = parties.filter(n => n != undefined);

  let accionistas = helper(workbook.Sheets.Accionistas).parties; // Aqui se une a los accionistas (solo en caso de existir)

  if (accionistas !== undefined) {
    accionistas = accionistas.filter(n => n != undefined);

    accionistas = groupBy(accionistas, acc => acc.id);

    let shareholders = {};

    Object.entries(accionistas).forEach(([key, value]) => {
      let sh = [];
      accionistas[key].filter(value => {
        sh.push(value.shareholders[0]);
        return value.shareholders[0];
      });
      shareholders[key] = {
        shareholders: sh,
      };
    });

    // console.log(allSheets.parties);

    let mergedParties = map(allSheets.parties, obj => {
      if (shareholders[obj.id]) {
        obj.shareholders = shareholders[obj.id].shareholders;
      }
      return obj;
    });
    console.log(mergedParties);

    allSheets.parties = mergedParties;
  }

  const _id = File0.find().fetch()[0]._id;
  File0.update({ _id: _id }, { $set: allSheets });
}
