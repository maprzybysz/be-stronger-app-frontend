const initialState = {
  date: new Date(),
  products: [{ name: 'pizza', fat: 111 }, { name: 'kebab' }],
  username: '',
  usertoken: '',
  error: '',
  meals: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FOOD':
      console.log(action.payload.food.calories);
      return {
        ...state,
        calories: state.calories + +100,
      };
    case 'PREVIOUS_DAY':
      return {
        ...state,
        date: new Date(new Date(state.date).setDate(state.date.getDate() - 1)),
      };
    case 'NEXT_DAY':
      return {
        ...state,
        date: new Date(new Date(state.date).setDate(state.date.getDate() + 1)),
      };
    case 'AUTHENTICATE_SUCCES': {
      return {
        ...state,
        usertoken: action.payload.data.token,
        username: action.payload.data.username,
      };
    }
    case 'AUTHENTICATE_FAILURE': {
      return {
        ...state,
        error: action.error.toString().substring(7, action.error.toString().length),
      };
    }
    case 'REGISTRATION_FAILURE': {
      return {
        ...state,
        error: action.error.toString().substring(7, action.error.toString().length),
      };
    }
    case 'UPDATE_MEALS_SUCCESS': {
      return {
        ...state,
        meals: action.payload.data,
      };
    }
    case 'UPDATE_MEALS_FAILURE': {
      return {
        ...state,
        meals: '',
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
