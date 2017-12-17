import User from './types/user';

const Mutation = `
input UserProfileInput {
  firstName: String!
  lastName: String!
  street: String!
  postalNumber: Int!
  city: String!
  birthday: Date!
  phoneMobile: String
  hometown: String
  regionalOffice: String
}

input FileInput {
  name: String!
  type: String!
  size: Int!
  path: String!
}


type Mutation {
  # User 
  updateUserAvatar(avatar: FileInput!, userId: ID): User
  updateEmail(email: String!, userId: ID): User
  updateUserProfile(profile: UserProfileInput, userId: ID): User  

  
  
  # Files
  uploadFile(file : FileInput): JSON
  upload0(file : FileInput): JSON
  upload1(file : FileInput): JSON
  upload2(file : FileInput): JSON
  upload3(file : FileInput): JSON
  upload4(file : FileInput): JSON
  upload5(file : FileInput): JSON
  upload6(file : FileInput): JSON
  refresh(file : FileInput): JSON
}
`;
export default () => [Mutation, User];
