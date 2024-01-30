import apiClient from "./api-Client";
import { getAuthToken } from "./authServices";

export function fetchResult(){
    return apiClient.get('/user/result',{
        headers:{
            auth:getAuthToken()
        }
    })
 }