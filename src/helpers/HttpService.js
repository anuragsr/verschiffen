import axios from 'axios'

// Choose an env -> ["local", "eca", "prod"]
const env = process.env.REACT_APP_ENV_TYPE

let apiHost, call

switch(env){
  case "eca": 
    apiHost = 'http://envisagecyberart.in/projects/cloudbasiert/v4/backend'
    break;
  
  case "prod": 
    apiHost = 'https://cloudbasiert.com/vs/backend'
    break;
  
  default: // local
    apiHost = 'http://localhost/verschiffen-be/backend'
    break; 
}

export default class HttpService {  
  post(url, data, auth, onUploadProgress) {
    let config = {
      method: "post",
      url: apiHost + url,
      data,
      auth,
      onUploadProgress,
    }
    
    return this.doRequest(config)
  }
  
  doRequest = config => {
    // l(config)
    if (config.params && config.params.series){
      delete config.params.series
      if(call){
        call.cancel('One request at a time, fellas!')
      }
      call = axios.CancelToken.source()
      config.cancelToken = call.token
    }
    return axios(config)
  }
}