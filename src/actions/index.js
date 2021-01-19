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
      console.log(payload.data.username);
      dispatch({ type: 'AUTHENTICATE_SUCCES', payload });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: 'AUTHENTICATE_FAILURE' });
    });
};
