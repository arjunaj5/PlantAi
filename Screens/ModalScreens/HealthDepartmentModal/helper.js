import { API_ROOT } from "../../../apiroot";

export const sendNewDiseaseData = async (body) => {
  const endpoint = '/new-disease-health-dept/'
  const response = await fetch(API_ROOT + endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  return await response.json();
}

export const sendNewCureData = async (body) => {
  const endpoint = '/new-cure-health-dept/'
  const response = await fetch(API_ROOT + endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  return await response.json();
}