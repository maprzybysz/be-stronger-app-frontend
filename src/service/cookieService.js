import cookie from 'js-cookie';
/* eslint-disable camelcase */
import jwt_decode from 'jwt-decode';
import history from 'history/history';

export const setUserToken = (token)=>{
    cookie.set("usertoken", token, {expires: 1})
}


export const getUserToken = ()=>{
 const usertoken = cookie.get("usertoken")
 return usertoken;
}

export const getUsername = ()=>{
    const token = cookie.get("usertoken")
    try{
        const decoded = jwt_decode(token);
        return decoded.sub;
    }catch(error){
        history.push('/login');
        return null;;
    }
       
    }
        
export const deleteUserToken = () => {
    cookie.remove("usertoken");
    history.push('/login');
}
