import SimpleSchema from 'simpl-schema';
import Organization from './elements/organization';

const record = new SimpleSchema(
  {
    ocid: String,
    id: String,
    date: Date,
    tag: String,
    initiationType: String,
    language: String,
    parties: [Organization],
  },
  { requiredByDefault: true }
);

export default record;
