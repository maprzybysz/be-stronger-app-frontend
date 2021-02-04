import { serverError, credentialsError } from 'assets/globalError';
import {setUsername, setUserToken} from 'service/cookieService';
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
      setUsername(action.payload.data.username)
      history.push('/');
      return {
        ...state
      }
      
      
    }
    case 'AUTHENTICATE_FAILURE': {
      let errorPl = '';
      switch (action.error.toString().substring(7, action.error.toString().length)) {
        case 'Network Error':
          errorPl = serverError;
          break;
        case 'Request failed with status code 401':
          errorPl = credentialsError;
          break;
        default:
          break;
      }
      return {
        ...state,
        error: errorPl,
      };
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
    default:
      return state;
  }
};

export default rootReducer;
