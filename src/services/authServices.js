export function saveUser(token){
    localStorage.setItem('auth-token', token)
    window.location="/dashboard"
}