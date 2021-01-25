import axios from 'axios';

export const addFood = (food) => ({
  type: 'ADD_FOOD',
  payload: {
    food,
  },
});

export const previousDay = () => ({ type: 'PREVIOUS_DAY' });
export const nextDay = () => ({ type: 'NEXT_DAY' });

export const authenticate = (username, password) => (dispatch) => {
  dispatch({ type: 'AUTHENICATE_REQUEST' });

  return axios
    .post('http://localhost:8080/login', {
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
    .post('http://localhost:8080/sign-up', {
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
export const updateMeals = (username, date) => (dispatch) => {
  dispatch({ type: 'UPDATE_MEALS' });
  const url = `http://localhost:8080/meal/getEatenMealByMealDate/${username}/${date}`;
  return axios
    .get(url)
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
  username,
) => (dispatch) => {
  dispatch({ type: 'SAVE_EATEN' });
  return axios
    .post('http://localhost:8080/meal/saveEatenMeal', {
      mealName,
      mealTime,
      mealDate,
      totalGrammage,
      totalGoodness,
      totalProtein,
      totalCarbohydrates,
      totalFat,
      username,
    })
    .then((payload) => {
      dispatch({ type: 'SAVE_EATEN_SUCCES', payload });
    })
    .catch((error) => {
      dispatch({ type: 'SAVE_EATEN_FAILURE', error });
    });
};

export const searchMeal = (mealName) => (dispatch) => {
  dispatch({ type: 'SEARCH_MEAL' });
  const url = `http://localhost:8080/meal/searchMeals/${mealName}`;
  return axios
    .get(url)
    .then((payload) => {
      dispatch({ type: 'SEARCH_MEAL_SUCCESS', payload });
    })
    .catch((error) => {
      dispatch({ type: 'SEARCH_MEAL_FAILURE', error });
    });
};
