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

export default function upload3(root, { file }) {
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

  const milestones = object.tender.milestones;
  if (milestones !== undefined) {
    object.tender.milestones = milestones.filter(n => n != undefined);
  }

  const criteria = object.tender.criteria;
  if (criteria !== undefined) {
    object.tender.criteria = criteria.filter(n => n != undefined);
  }

  const documents = object.tender.documents;
  if (documents !== undefined) {
    object.tender.documents = documents.filter(n => n != undefined);
  }

  const tenderers = object.tender.tenderers;
  if (tenderers !== undefined) {
    object.tender.tenderers = tenderers.filter(n => n != undefined);
  }

  const items = object.tender.items;
  if (items !== undefined) {
    object.tender.items = items.filter(n => n != undefined);
  }

  const details = object.bids.details;
  if (details !== undefined) {
    object.bids.details = details.filter(n => n != undefined);
  }

  console.log(object);

  const finalObject = object;

  const _id = File0.find().fetch()[0]._id;
  File0.update({ _id: _id }, { $set: finalObject });

  return true;
}
