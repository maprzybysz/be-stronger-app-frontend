import { serverError, credentialsError } from 'assets/globalError';
import {setUserToken} from 'service/cookieService';
import history from 'history/history';

const initialState = {
  date: new Date(),
  error: '',
  meals: {
    breakfast: [],
    dinner: [],
    supper: [],
    snacks: [],
  },
  findMeals: [],
  shoppingList: [],
  userWeights: [],
  userDetails: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
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
      setUserToken(action.payload.data.token)
      history.push('/');
      return {
        ...state
      }
    }
    case 'AUTHENTICATE_FAILURE': {
      let errorPl = '';
      if(action.error.toString().substring(7, action.error.toString().length)==='Request failed with status code 401'){
         errorPl = credentialsError;
      }else if(action.error.toString().substring(7, action.error.toString().length)==='Network Error'){
        errorPl = serverError;
      }
      return {
        ...state,
        error: errorPl
      }
    }
    case 'Network Error': {
      return {
        ...state,
        error: serverError
      }
    }
    case 'Request failed with status code 401': {
      return {
          ...state,
      }
    }

    case 'REGISTRATION_FAILURE': {
      return {
        ...state,
        error: action.error.toString().substring(7, action.error.toString().length),
      };
    }
    case 'UPDATE_MEALS_SUCCESS': {
      const meals = action.payload.data;
      return {
        ...state,
        meals: {
          breakfast: meals.filter((item) => item.mealTime === 'ŚNIADANIE'),
          dinner: meals.filter((item) => item.mealTime === 'OBIAD'),
          supper: meals.filter((item) => item.mealTime === 'KOLACJA'),
          snacks: meals.filter((item) => item.mealTime === 'PRZEKĄSKA'),
        },
      };
    }
    case 'UPDATE_MEALS_FAILURE': {
       return {
         ...state,
        meals: {
          breakfast: [],
          dinner: [],
          supper: [],
          snacks: [],
        },
      };
    }
    case 'DELETE_MEAL_SUCCESS': {
      const newArray = {
        breakfast: state.meals.breakfast.filter(meal => meal.id !== action.id),
        dinner: state.meals.dinner.filter(meal => meal.id !== action.id),
        supper: state.meals.supper.filter(meal => meal.id !== action.id),
        snacks: state.meals.snacks.filter(meal => meal.id !== action.id),
      }
      return {
        ...state,
        meals: newArray

      }
    }
    case 'SEARCH_MEAL_SUCCESS':{

      return {
        ...state,
        findMeals: action.payload.data
      }
    }
    case 'SEARCH_MEAL_FAILURE':{
      return {
        ...state,
      }
    }
    case 'SAVE_EATENMEAL_SUCCES':{
      return {
        ...state
      }
    }
    case 'GET_SHOPPINGLIST_SUCCESS':{
      return {
        ...state,
        shoppingList: action.payload.data,

      }
    }
    case 'DELETE_SHOPPING_LIST_ELEMENT_SUCCESS': {
      const newShoppingList = state.shoppingList.filter(item => item.id !== action.id);
      return {
        ...state,
        shoppingList: newShoppingList

      }
    }
    case 'ADD_SHOPPING_LIST_ELEMENT_SUCCES': {
      return {
        ...state,
      }
    }
    case 'ADD_WEIGHT_SUCCESS': {
      return {
        ...state,
      }
    }
    case 'GET_WEIGHTS_SUCCESS': {
      return {
        ...state,
        userWeights: action.payload.data
      }
    }
    case 'GET_WEIGHTS_FAILURE': {
      return {
        ...state,
      }
    }
    case 'GET_WEIGHT_SUCCESS': {
      return {
        ...state,
        userWeight: action.payload.data
      }
    }
    case 'GET_DETAILS_SUCCESS': {
      return {
        ...state,
        userDetails: action.payload.data
      }
    }
    default:
      return state;
  }

};

export default rootReducer;
