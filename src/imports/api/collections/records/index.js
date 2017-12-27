import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

Meteor.users.attachSchema(
  new SimpleSchema(
    {
      uri: {
        type: String,
        regEx: SimpleSchema.RegEx.Url,
      },
    },
    { requiredByDefault: true }
  )
);

Meteor.users.setStepCompleted = ({ userId, step }) =>
  Meteor.users.update(
    {
      _id: userId,
      'stepsCompleted.step': { $ne: step },
    },
    {
      $addToSet: {
        stepsCompleted: {
          timestamp: new Date(),
          step,
        },
      },
    }
  );

export default Meteor.users;
