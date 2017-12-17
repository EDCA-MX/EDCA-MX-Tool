import { Roles } from 'meteor/nicolaslopezj:roles';
import me from './me';
import user from './user';
import get0 from './get0';
import files from './files';

export default {
  files,
  get0,
  me,
  @Roles.action('viewUser') user,
};
