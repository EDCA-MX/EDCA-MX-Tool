import SimpleSchema from 'simpl-schema';

const identifier = new SimpleSchema(
  {
    scheme: String,
    id: String,
    legalName: {
      type: String,
    },
    uri: {
      type: String,
      regEx: SimpleSchema.RegEx.Url,
    },
  },
  { requiredByDefault: false }
);

export default identifier;
