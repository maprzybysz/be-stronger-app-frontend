import axios from 'axios';
import history from 'history/history';
import { deleteUserToken, getUsername, getUserToken } from 'service/cookieService';
import { serverURL} from 'assets/globalVariables';
import { redirectToLogin } from '../service/redirectService';


const errorVerify = (error, dispatch) =>{
  if(error.toString().substring(7, error.toString().length)==='Request failed with status code 401'){
    redirectToLogin();
    dispatch({ type: 'Request failed with status code 401', error });
  }else if(error.toString().substring(7, error.toString().length)==='Network Error'){
    dispatch({ type: 'Network Error', error });
  }
}

export const previousDay = () => ({ type: 'PREVIOUS_DAY' });
export const nextDay = () => ({ type: 'NEXT_DAY' });

export const authenticate = (username, password) => (dispatch) => {
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
  axios
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
  const url = `${serverURL}/meal/getEatenMealsByMealDate/${getUsername()}/${date}`;
  return axios
    .get(url, {
      headers: {
        'Authorization': `Bearer ${getUserToken()}`,
      },
    })
    .then((payload) => {
      dispatch({ type: 'UPDATE_MEALS_SUCCESS', payload });
    })
    .catch((error) => {
      errorVerify(error, dispatch);
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
  return axios
    .post(`${serverURL}/meal/saveEatenMeal/${getUsername()}`, {
      mealName,
      mealTime,
      mealDate,
      totalGrammage,
      totalGoodness,
      totalProtein,
      totalCarbohydrates,
      totalFat,
      },{
       headers: {
        'Authorization': `Bearer ${getUserToken()}`,
      },
    })
    .then((payload) => {
     history.push('/nutrition');
      dispatch({ type: 'SAVE_EATENMEAL_SUCCES', payload });
    })
    .catch((error) => {
      errorVerify(error, dispatch);
      dispatch({ type: 'SAVE_EATENMEAL_FAILURE', error });
    });
};

export const searchMeals = (mealName) => (dispatch) => {
  const url = `${serverURL}/meal/searchMeals/${mealName}`;
  return axios
    .get(url, {
       headers: {
        'Authorization': `Bearer ${getUserToken()}`,
      },
    })
    .then((payload) => {
      dispatch({ type: 'SEARCH_MEAL_SUCCESS', payload });
    })
    .catch((error) => {
      errorVerify(error, dispatch);
      dispatch({ type: 'SEARCH_MEAL_FAILURE', error });
    });
};

export const deleteMeal = (id) => (dispatch) => {
  return axios
    .delete(`${serverURL}/meal/deleteEatenMealById/${id}`,{
       headers: {
        'Authorization': `Bearer ${getUserToken()}`,
      },
    } )
    .then(() => {
      dispatch({ type: 'DELETE_MEAL_SUCCESS', id });
    })
    .catch((error) => {
      errorVerify(error, dispatch);
      dispatch({ type: 'DELETE_MEAL_FAILURE', error });
    });
};
export const getShoppingList = () => (dispatch) => {
  return axios
    .get(`${serverURL}/meal/getShoppingList/${getUsername()}`,{
      headers: {
        'Authorization': `Bearer ${getUserToken()}`,
      },
    } )
    .then((payload) => {
      dispatch({ type: 'GET_SHOPPING_LIST_SUCCESS', payload });
    })
    .catch((error) => {
      errorVerify(error, dispatch);
      dispatch({ type: 'GET_SHOPPING_LIST_FAILURE', error });
    });
}
export const addShoppingListElement = (productName) => (dispatch) => {
  return axios
    .post(`${serverURL}/meal/addShoppingListElement/${getUsername()}/${productName}`,{},{
      headers: {
        'Authorization': `Bearer ${getUserToken()}`,
      },
    } )
    .then(() => {
      dispatch({ type: 'ADD_SHOPPING_LIST_ELEMENT_SUCCES', productName });
    })
    .catch((error) => {
      errorVerify(error, dispatch);
      dispatch({ type: 'ADD_SHOPPING_LIST_ELEMENT_FAILURE', error });
    });
}
export const deleteShoppingListElement = (id) => (dispatch) =>{
  return axios
    .delete(`${serverURL}/meal/deleteShoppingListElement/${id}`,{
      headers: {
        'Authorization': `Bearer ${getUserToken()}`,
      },
    } )
    .then(() => {
      dispatch({ type: 'DELETE_SHOPPING_LIST_ELEMENT_SUCCESS', id });
    })
    .catch((error) => {
      errorVerify(error, dispatch);
      dispatch({ type: 'DELETE_SHOPPING_LIST_ELEMENT_FAILURE', error });
    });
}
export const addWeight = (weight, dateAdded) => (dispatch) => {
  return axios
    .post(`${serverURL}/user/addWeight/${getUsername()}`, {
      weight,
      dateAdded
    },{
      headers: {
        'Authorization': `Bearer ${getUserToken()}`,
      },
    })
    .then(() => {
      dispatch({ type: 'ADD_WEIGHT_SUCCESS', weight });
    })
    .catch((error) => {
      errorVerify(error, dispatch);
      dispatch({ type: 'ADD_WEIGHT_FAILURE', error });
    });
}
export const getUserWeights = () => (dispatch) => {
  return axios
    .get(`${serverURL}/user/getUserWeights/${getUsername()}`,{
      headers: {
        'Authorization': `Bearer ${getUserToken()}`,
      },
    } )
    .then((payload) => {
      dispatch({ type: 'GET_WEIGHTS_SUCCESS', payload });
    })
    .catch((error) => {
      errorVerify(error, dispatch);
      dispatch({ type: 'GET_WEIGHTS_FAILURE', error });
    });
}
export const getUserWeight = () => (dispatch) => {
  return axios
    .get(`${serverURL}/user/getUserWeight/${getUsername()}`,{
      headers: {
        'Authorization': `Bearer ${getUserToken()}`,
      },
    } )
    .then((payload) => {
      dispatch({ type: 'GET_WEIGHT_SUCCESS', payload });
    })
    .catch((error) => {
      errorVerify(error, dispatch);
      dispatch({ type: 'GET_WEIGHT_FAILURE', error });
    });
}

export const getUserDetails = () => (dispatch) => {
  return axios
    .get(`${serverURL}/user/getUserDetails/${getUsername()}`, {
      headers: {
        'Authorization': `Bearer ${getUserToken()}`,
      },
    })
    .then((payload) => {
      dispatch({ type: 'GET_DETAILS_SUCCESS', payload });
    })
    .catch((error) => {
      errorVerify(error, dispatch);
      dispatch({ type: 'GET_DETAILS_FAILURE', error });
    });
}

  export const updateUserActivity = (activity) => (dispatch) => {
    return axios
      .post(`${serverURL}/user/updateActivity/${getUsername()}/${activity}`, {

      },{
        headers: {
          'Authorization': `Bearer ${getUserToken()}`,
        },
      })
      .then((payload) => {
        dispatch({ type: 'UPDATE_ACTIVITY_SUCCESS', payload });
      })
      .catch((error) => {
        errorVerify(error, dispatch);
        dispatch({ type: 'UPDATE_ACTIVITY_FAILURE', error });
      });
  }
export const updateUserHeight = (height) => (dispatch) => {
  return axios
    .post(`${serverURL}/user/updateHeight/${getUsername()}/${height}`, {

    },{
      headers: {
        'Authorization': `Bearer ${getUserToken()}`,
      },
    })
    .then((payload) => {
      dispatch({ type: 'UPDATE_HEIGHT_SUCCESS', payload });
    })
    .catch((error) => {
      errorVerify(error, dispatch);
      dispatch({ type: 'UPDATE_HEIGHT_FAILURE', error });
    });
}

export const updateUserGoal= (goal) => (dispatch) => {
  return axios
    .post(`${serverURL}/user/updateGoal/${getUsername()}/${goal}`, {

    },{
      headers: {
        'Authorization': `Bearer ${getUserToken()}`,
      },
    })
    .then((payload) => {
      dispatch({ type: 'UPDATE_GOAL_SUCCESS', payload });
    })
    .catch((error) => {
      errorVerify(error, dispatch);
      dispatch({ type: 'UPDATE_GOAL_FAILURE', error });
    });
}
export const getUserTMR = (date) => (dispatch) => {
  return axios
    .get(`${serverURL}/user/getUserTMR/${getUsername()}/${date}`, {
      headers: {
        'Authorization': `Bearer ${getUserToken()}`,
      },
    })
    .then((payload) => {
      dispatch({ type: 'GET_TMR_SUCCESS', payload });
    })
    .catch((error) => {
      errorVerify(error, dispatch);
      dispatch({ type: 'GET_TMR_FAILURE', error });
    });
}
export const getArticlesByCategory = (category) => (dispatch) => {
  return axios
    .get(`${serverURL}/blog/${category}`, {
      headers: {
        'Authorization': `Bearer ${getUserToken()}`,
      },
    })
    .then((payload) => {
      dispatch({ type: 'GET_ARTICLES_SUCCESS', payload });
    })
    .catch((error) => {
      errorVerify(error, dispatch);
      dispatch({ type: 'GET_ARTICLES_FAILURE', error });
    });
}
export const getArticleById = (id) => (dispatch) => {
  return axios
    .get(`${serverURL}/blog/article/${id}`, {
      headers: {
        'Authorization': `Bearer ${getUserToken()}`,
      },
    })
    .then((payload) => {
      dispatch({ type: 'GET_ARTICLE_SUCCESS', payload });
    })
    .catch((error) => {
      errorVerify(error, dispatch);
      dispatch({ type: 'GET_ARTICLE_FAILURE', error });
    });
}
