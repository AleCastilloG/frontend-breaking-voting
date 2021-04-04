import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { listaPersonajes } from '../operations/query';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { changeVotes } from '../operations/subscription';
import { addVoteOperation } from '../operations/mutation';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private apollo: Apollo) {}

  // Lista de los personsajes de Breaking Bad
  getCharacters(skip: boolean = true): Observable<any> {
    return this.apollo
      .watchQuery({
        query: listaPersonajes,
        variables: {
          skip,
        },
        fetchPolicy: 'network-only',
      })
      .valueChanges.pipe(
        take(1),
        map((result: any) => {
          return result.data.characters;
        })
      );
  }

  // Obtener los cambios en tiempo real de los votos
  changeVotesListener(): Observable<any> {
    return this.apollo.subscribe({
      query: changeVotes,
      // fetchPolicy: 'network-only'
    });
  }

  // Añadir un nuevo voto
  addVote(character: string): Observable<any> {
    return this.apollo.mutate({
      mutation: addVoteOperation,
      variables: {
        character,
      },
    });
  }
}
