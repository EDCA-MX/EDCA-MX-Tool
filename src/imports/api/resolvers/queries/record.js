import Records from '../../collections/records';

export default function(root, { _id }) {
  return Records.findOne(_id);
}
