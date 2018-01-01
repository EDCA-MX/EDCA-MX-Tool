import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import Publisher from './release/elements/publisher';
import Release from './release';

const Records = new Meteor.Collection('records');

const Record = new SimpleSchema(
  {
    uri: {
      type: String,
      regEx: SimpleSchema.RegEx.Url,
    },
    ocid: String,
    version: String,
    extensions: Array,
    publishedDate: Date,
    license: {
      type: String,
      regEx: SimpleSchema.RegEx.Url,
    },
    publicationPolicy: {
      type: String,
      regEx: SimpleSchema.RegEx.Url,
    },
    publisher: Publisher,
    releases: [Release],
  },
  { requiredByDefault: true }
);

Records.attachSchema(Record);

export default Records;
