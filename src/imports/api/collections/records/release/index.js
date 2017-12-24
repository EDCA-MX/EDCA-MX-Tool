import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import Organization from './elements/organization';

Meteor.users.attachSchema(
  new SimpleSchema(
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
  )
);
export default Meteor.users;
