import SimpleSchema from 'simpl-schema';

const identifier = new SimpleSchema(
  {
    name: String,
    scheme: String,
    uid: String,
    uri: {
      type: String,
      regEx: SimpleSchema.RegEx.Url,
    },
  },
  { requiredByDefault: false }
);

export default identifier;
