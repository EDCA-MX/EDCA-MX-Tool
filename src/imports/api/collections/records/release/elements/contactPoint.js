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
      regEx: /^(((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$/,
    },
  },
  { requiredByDefault: false }
);

export default contactPoint;