import SimpleSchema from 'simpl-schema';

const address = new SimpleSchema(
  {
    streetAddress: String,
    locality: String,
    region: String,
    postalCode: String,
    countryName: {
      type: String,
    },
  },
  { requiredByDefault: false }
);

export default address;
