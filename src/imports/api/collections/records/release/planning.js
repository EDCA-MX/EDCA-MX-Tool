import SimpleSchema from 'simpl-schema';

const organization = new SimpleSchema(
  {
    name: String,
    id: String,
    identifier: String,
    additionalIdentifiers: String,
    address: String,
    contactPoint: String,
    roles: String,
    details: String,
  },
  { requiredByDefault: false }
);

export default organization;
