import apiClient from "./api-Client";
import { getAuthToken } from "./authServices";

export function postQuiz(data){
   return apiClient.post('/quiz',data)
}




export function fetchOpenQuizList(data){
   return apiClient.get('/quiz', {
      headers:{
         auth:getAuthToken()
      }
   })
}



export function fetchOpenQuiz(id){
   return apiClient.get(`/user/quiz/${id}`)
}


export function attemptQuiz(id, data){
   return apiClient.post(`/user/quiz/${id}`, data , {
      headers:{
         auth: getAuthToken()
      
      }
   })
}