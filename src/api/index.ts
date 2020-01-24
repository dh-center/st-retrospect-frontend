import axios from 'axios';

/**
 * Endpoint for api calls
 */
const API_ENDPOINT: string = process.env.VUE_APP_API_ENDPOINT;

/**
 * Makes request to API
 * @param {String} request - request to send
 * @param {Object} [variables] - request variables
 * @return {Promise<*>} - request data
 */
export async function call(
  request: string,
  variables?: any
): Promise<any> {
  const response = await axios.post(API_ENDPOINT, {
    query: request,
    variables
  });

  if (response.data.errors) {
    throw response.data.errors[0];
  }
  return response.data.data;
}
