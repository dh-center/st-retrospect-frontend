import { RelayEnvironmentProvider } from 'react-relay';
import { Environment, Network, RecordSource, RequestParameters, Store, Variables } from 'relay-runtime';
import { ReactElement, useMemo } from 'react';
import WithChildren from '../interfaces/WithChildren';

/**
 * Client for performing GraphQL requests
 */
class GraphQLClient {
  /**
   * Function for making queries to GraphQL server
   *
   * @param operation - query to perform
   * @param variables - query variables
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async fetchQuery(operation: RequestParameters, variables: Variables): Promise<any> {
    return await this.sendQuery(operation.text, variables);
  }

  /**
   * Sends query to GraphQL server
   *
   * @param query - query to send
   * @param variables - query variables
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private async sendQuery(query: string | null | undefined, variables: Variables): Promise<any> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    return response.json();
  }
}

/**
 * Relay environment provider to use it in hooks and other GraphQL requests
 *
 * @param props - props for component rendering
 */
export default function RelayEnvironmentContext(props: WithChildren): ReactElement {
  const client = useMemo(() => new GraphQLClient(), []);

  const env = useMemo(() => {
    const network = Network.create(
      (request, variables) => client.fetchQuery(request, variables)
    );

    const source = new RecordSource();
    const store = new Store(source);

    return new Environment({
      network,
      store,
    });
  }, []);

  return (
    <RelayEnvironmentProvider environment={env}>
      { props.children }
    </RelayEnvironmentProvider>
  );
}
