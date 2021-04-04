import { gql } from 'apollo-angular';

export const changeVotes = gql`
  subscription {
    changeVotes {
      id
      name
      votes
    }
  }
`;
