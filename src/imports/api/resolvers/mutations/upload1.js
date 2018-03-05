import XLSX from 'xlsx';
import merge from 'lodash/merge';
import helper from '../helpers';

import File0 from '../../collections/file0';

const removeEmpty = obj =>
  Object.keys(obj).filter(f => obj[f] !== null).reduce(
    (r, i) =>
      typeof obj[i] === 'object'
        ? { ...r, [i]: removeEmpty(obj[i]) } // recurse.
        : { ...r, [i]: obj[i] },
    {}
  );

export default function upload1(root, { file }) {
  let workbook = XLSX.readFile(file.path);
  let data = [];

  data.push(
    workbook.SheetNames.map(name => {
      let value = {};
      name !== 'Instrucciones' && name !== 'listas-desplegables'
        ? (value = helper(workbook.Sheets[name]))
        : (value = {});
      return value;
    })
  );

  const object = merge({}, ...data[0]);

  const locations = object.planning.project.locations;

  if (locations !== undefined) {
    object.planning.project.locations = locations.filter(n => n != undefined);
  }

  const milestones = object.planning.milestones;

  if (milestones !== undefined) {
    object.planning.milestones = milestones.filter(n => n != undefined);
  }

  const forecasts = object.planning.forecasts;
  if (forecasts !== undefined) {
    object.planning.forecasts = forecasts.filter(n => n != undefined);
  }

  const documents = object.planning.documents;
  if (documents !== undefined) {
    object.planning.documents = documents.filter(n => n != undefined);
  }

  const budget = object.planning.budget.budgetBreakdown;
  if (budget !== undefined) {
    object.planning.budget.budgetBreakdown = budget.filter(n => n != undefined);
  }

  object.ocid = object.ocid.toLowerCase();
  Object.keys(object).forEach(key => object[key] === null && delete object[key]);

  const finalObject = object;

  const _id = File0.find().fetch()[0]._id;
  File0.update({ _id: _id }, { $set: finalObject });

  return true;
}
