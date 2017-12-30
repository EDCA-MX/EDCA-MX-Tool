import Records from '../../collections/records';
import fs from 'fs';

export default function upload0(root, { file }) {
  var obj = JSON.parse(fs.readFileSync(file.path, 'utf8'));
  console.log(obj);
  Records.insert(obj);
}
