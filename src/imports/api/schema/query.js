import User from './types/user';

const Query = `
  type Query {
    me: User
    user(_id: ID!): User
    files: [JSON]
    get0: [JSON]
    get1: [JSON]
    get2: [JSON]
    get3: [JSON]
    get4: [JSON]
    get5: [JSON]
    get6: [JSON]
  }
`;
export default () => [Query, User];
