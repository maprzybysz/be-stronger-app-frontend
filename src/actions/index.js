import axios from 'axios';
import { deleteUsername, deleteUserToken, getUsername, getUserToken } from 'service/cookieService';
import { serverURL} from 'assets/globalVariables';



export const previousDay = () => ({ type: 'PREVIOUS_DAY' });
export const nextDay = () => ({ type: 'NEXT_DAY' });

export const authenticate = (username, password) => (dispatch) => {
  dispatch({ type: 'AUTHENICATE_REQUEST' });
  deleteUsername();
  deleteUserToken();
  return axios
    .post(`${serverURL}/login`, {
      username,
      password,
    })
    .then((payload) => {
      dispatch({ type: 'AUTHENTICATE_SUCCES', payload });
    })
    .catch((error) => {
      dispatch({ type: 'AUTHENTICATE_FAILURE', error });
    });
};

export const registration = (username, password, email, rulesAccepted) => (dispatch) => {
  dispatch({ type: 'REGISTRATION_REQUEST' });

  return axios
    .post(`${serverURL}/sign-up`, {
      username,
      password,
      email,
      rulesAccepted,
    })
    .then((payload) => {
      dispatch({ type: 'REGISTRATION_SUCCES', payload });
    })
    .catch((error) => {
      dispatch({ type: 'REGISTRATION_FAILURE', error });
    });
};

export const updateMeals = (date) => (dispatch) => {
  const username = getUsername();
  const usertoken = getUserToken();
  dispatch({ type: 'UPDATE_MEALS' });
  const url = `${serverURL}/meal/getEatenMealsByMealDate/${username}/${date}`;
  return axios
    .get(url, {
      headers: {
        'Authorization': `Bearer ${usertoken}`,
      },
    })
    .then((payload) => {
      dispatch({ type: 'UPDATE_MEALS_SUCCESS', payload });
    })
    .catch((error) => {
      dispatch({ type: 'UPDATE_MEALS_FAILURE', error });
    });
};

export const addEatenMeal = (
  mealName,
  mealTime,
  mealDate,
  totalGrammage,
  totalGoodness,
  totalProtein,
  totalCarbohydrates,
  totalFat,
  
) => (dispatch) => {
   const username = getUsername();
  const usertoken = getUserToken();
  dispatch({ type: 'SAVE_EATEN' });
  
  return axios
    .post(`${serverURL}/meal/saveEatenMeal`, {
      mealName,
      mealTime,
      mealDate,
      totalGrammage,
      totalGoodness,
      totalProtein,
      totalCarbohydrates,
      totalFat,
      username,
    },{
       headers: {
        'Authorization': `Bearer ${usertoken}`,
      },
    })
    .then((payload) => {
     
      dispatch({ type: 'SAVE_EATEN_SUCCES', payload });
    })
    .catch((error) => {
       
      dispatch({ type: 'SAVE_EATEN_FAILURE', error });
    });
};

export const searchMeals = (mealName) => (dispatch) => {
  dispatch({ type: 'SEARCH_MEAL' });
   const usertoken = getUserToken();
  const url = `${serverURL}/meal/searchMeals/${mealName}`;
  return axios
    .get(url, {
       headers: {
        'Authorization': `Bearer ${usertoken}`,
      },
    })
    .then((payload) => {
      dispatch({ type: 'SEARCH_MEAL_SUCCESS', payload });
    })
    .catch((error) => {
      dispatch({ type: 'SEARCH_MEAL_FAILURE', error });
    });
};

export const deleteMeal = (id) => (dispatch) => {
  const usertoken = getUserToken();
  dispatch({ type: 'DELETE_MEAL' });
  return axios
    .delete(`${serverURL}/meal/deleteEatenMealById/${id}`,{
       headers: {
        'Authorization': `Bearer ${usertoken}`,
      },
    } )
    .then(() => {
      dispatch({ type: 'DELETE_MEAL_SUCCESS', id });
    })
    .catch((error) => {
      dispatch({ type: 'DELETE_MEAL_FAILURE', error });
    });
};
