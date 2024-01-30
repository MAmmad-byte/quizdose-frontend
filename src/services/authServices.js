import {jwtDecode} from "jwt-decode"
export function saveUser(token){
    localStorage.setItem('auth-token', token)
    window.location="/dashboard"
}

export function getUserInfo(){
    try {
        let token = localStorage.getItem("auth-token")
        return  jwtDecode(token)
        
    } catch (ex) {
        return null;
    }
}

export function getAuthToken(){
    try {
        let token = localStorage.getItem("auth-token")
        return  token
        
    } catch (ex) {
        return null;
    }
}

export function validateUser(){
        let token = localStorage.getItem("auth-token")
        if(token)
            return true;
        else    
            return false;
}
export function isMod(){
        let token = localStorage.getItem("auth-token")
        let decode = jwtDecode(token)
        if(decode.role.isModerator || decode.role.isAdmin)
            return true;
        else    
            return false;
}