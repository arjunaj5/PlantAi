import { API_ROOT } from "../../apiroot";

// Send a single report from user dashboard and healthy result page

export const sendReport = async (historyId, reportStatus, comment) => {

  const body = {
    history: historyId,
    comments: comment,
    status: reportStatus
  };
  const result = await fetch( API_ROOT + '/disease-reports-creation/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  return await result.json()
}

// get detection history for user
export const getDetectionHistory = async (id) => {
  const body = {
    id
  }
  const response = await fetch( API_ROOT + '/user-history/' ,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  });
  return await response.json();
}

// Get details of all reports as array for specific user
export const getReports = async (id) => {
  const body = {
    user_id:id
  }
  const response = await fetch( API_ROOT + '/reports-retrieval-view/' ,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  });
  return await response.json();
}

// Get details about a replied report
export const getRepliedReport = async (id) => {
  const body = {
    report_id:id
  }
  const response = await fetch( API_ROOT + '/replied-report-data/' ,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  });
  return await response.json();
}