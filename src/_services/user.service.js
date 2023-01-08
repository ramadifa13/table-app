import axios from 'axios';
import config from '../config/config';


export const userService = {
    get,
    post,
    put,
    deleteDetail
};

function get(apiEndpoint){
    return axios.get(config.baseUrl+apiEndpoint, getOptions()).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log("Error in response");
        console.log(err);
    })
}

function post(apiEndpoint, payload){
    return axios.post(config.baseUrl+apiEndpoint, payload, getOptions()).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}

function put(apiEndpoint, payload){
    return axios.put(config.baseUrl+apiEndpoint, payload, getOptions()).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}

function deleteDetail(apiEndpoint){
    return axios.delete(config.baseUrl+apiEndpoint, getOptions()).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}

function getOptions(){
    let options = {}; 
        options.headers = { 'authorization': "Bearer 73212bf0e8da3e36dbc027c61920c49b4727f00e117ecd982e6359cb3da5f445" };
  
    return options;
}