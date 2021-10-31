import axios from "axios";
import { createBrowserHistory } from 'history';
import config from "../../config";
import { getKey, removeKey } from "../storage";

const request = axios.create({
    baseURL:config.API_ROOT,
    params:{},
    headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
    }
});

request.interceptors.request.use((request) => {
    if(!request.headers.Authorization){
        const token = getKey('token');
        if(token){
            request.headers.Authorization =`Token ${token}`;
        }
    }

    return request;
},(error) => {
    console.log(error);
});

request.interceptors.response.use((response) => {
    console.log(response    );
    return response;
},(error) => {
    const statusCode = error.response.status;
    if(statusCode == 401){
        // createBrowserHistory().push('/');
        window.location.href='/'
    }
});


export {request};