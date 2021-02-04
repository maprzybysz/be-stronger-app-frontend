import cookie from 'js-cookie';


export const setUserToken = (token)=>{
    cookie.set("usertoken", token, {expires: 1})
}
export const setUsername = (username)=>{
    cookie.set("username", username, {expires: 1})
}

export const getUserToken = ()=>{
 const usertoken = cookie.get("usertoken")
 return usertoken;
}

export const getUsername = ()=>{
    const username = cookie.get("username")
    return username;
}


export const deleteUserToken = () => {
    console.log(getUsername());
    cookie.remove("usertoken");
}
export const deleteUsername = () => {
    cookie.remove("username");
}