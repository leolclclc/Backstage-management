export function setToken(tokenKey,token){
    return localStorage.setItem(tokenKey,token)
}
export function getToken(tokenKey,token){
    return localStorage.getItem(tokenKey,token)
}
export function removeToken(tokenKey,token){
    return localStorage.removeItem(tokenKey,token)
}