import cookie from 'js-cookie';


export const setUserToken = (token)=>{
    cookie.set("usertoken", token)
}
export const setUsername = (username)=>{
    cookie.set("username", username)
}

export const getUserToken = ()=>{
 const usertoken = cookie.get("usertoken")
 return usertoken;
}

export const getUsername = ()=>{
    const username = cookie.get("username")
    return username;
}
