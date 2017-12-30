import Records from '../../collections/records';

export default function upload0(root, { file }) {
  const _id = Records.find().fetch()[0]._id;
  Records.update({ _id: _id }, { $set: file });
}
