import SimpleSchema from 'simpl-schema';

const contactPoint = new SimpleSchema(
  {
    locality: String,
    region: String,
    postalCode: String,
    telephone: String,
    faxNumber: String,
    email: {
      type: String,
      regEx: SimpleSchema.RegEx.Email,
    },
    url: {
      type: String,
      regEx: SimpleSchema.RegEx.Url,
    },
    name: {
      type: String,
    },
  },
  { requiredByDefault: false }
);

export default contactPoint;
