import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache, split } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

interface Idefinition {
  kind: string;
  operation?: string;
}

const uri = 'https://ale-voting-breaking-bad.herokuapp.com/graphql';
const uriSocket = 'wss://ale-voting-breaking-bad.herokuapp.com/graphql';

const createApollo = (httpLink: HttpLink): ApolloClientOptions<any> => {
  // Configurar la url principal con el link
  const http = httpLink.create({ uri });

  // Configurar el websocket con el link (ws)
  const subscriptionLink = new WebSocketLink({
    uri: uriSocket,
    options: {
      reconnect: true,
    },
  });

  // Unir las dos conexiones
  const link = split(
    ({ query }) => {
      const { kind, operation }: Idefinition = getMainDefinition(query);
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    subscriptionLink,
    http
  );

  // crear conexión
  return {
    link,
    cache: new InMemoryCache(),
  };
};

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
