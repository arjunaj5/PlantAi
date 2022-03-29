import { API_ROOT } from "../../apiroot";
import * as FileSystem from 'expo-file-system';

export const postToImagekit = async (base64, userId, detectionResult) => {
  // const base64 = uri
  let formData = new FormData();
  formData.append('base64', base64 );
  formData.append('userId', userId);
  if(detectionResult.healthy){
    formData.append('healthy', true);
  }
  else {
    formData.append('healthy', false);
    formData.append('mlId', detectionResult.ml_id);
  }
  

  const response = await fetch( API_ROOT + '/upload-imagekit/', {
    method: 'POST',
    body: formData,
    header: {
      'content-type': 'multipart/form-data',
    },
  })
  return await response.json();
}