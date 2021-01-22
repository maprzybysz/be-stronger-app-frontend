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
