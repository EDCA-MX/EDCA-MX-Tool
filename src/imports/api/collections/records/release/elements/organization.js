import SimpleSchema from 'simpl-schema';
import Identifier from './identifier';
import Address from './address';
import ContactPoint from './contactPoint';

const organization = new SimpleSchema(
  {
    name: String,
    id: String,
    identifier: Identifier,
    additionalIdentifiers: Identifier,
    address: Address,
    contactPoint: ContactPoint,
    roles: Array,
    details: String,
  },
  { requiredByDefault: false }
);

export default organization;
