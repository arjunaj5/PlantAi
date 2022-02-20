import { API_ROOT } from '../../apiroot';

export const getReports = async () => {

  const result = await fetch( API_ROOT + '/all-reports-retrieval-view/')

  return await result.json();
}