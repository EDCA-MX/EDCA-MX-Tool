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

export default function upload6(root, { file }) {
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
  console.log(data, object);

  const finalObject = object;

  const _id = File0.find().fetch()[0]._id;
  File0.update({ _id: _id }, { $set: finalObject });

  return true;
}
