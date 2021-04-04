import { gql } from 'apollo-angular';

export const addVoteOperation = gql`
  mutation asignarVoto($character: ID!) {
    addVote(character: $character) {
      status
      message
      characters {
        id
        name
        votes
      }
    }
  }
`;
