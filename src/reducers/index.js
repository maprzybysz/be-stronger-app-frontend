import {setUserToken} from 'service/cookieService';
import history from 'history/history';



const initialState = {
  date: new Date(),
  meals: {
    breakfast: [],
    dinner: [],
    supper: [],
    snacks: [],
  },
  findMeals: [],
  shoppingList: [],
  userWeights: [],
  userDetails: {},
  userTMR: {},
  articles: [],
  article: {},
  findExercises:[],
  presentExercise: '',
  exercises: [],
  messageRegistration: null,
  errorRegistration: null,
  errorLogin: null
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
        ...state,
        errorLogin: null,
        errorRegistration: null
      }
    }
    case 'AUTHENTICATE_FAILURE': {
      return {
        ...state,
        errorLogin: action.error.toString().substring(7, action.error.toString().length)
      }
    }
    case 'REGISTRATION_SUCCES': {
      return {
        ...state,
        messageRegistration: 'Rejestracja pomyślna. Na Twój mail został wysłany link aktywacyjny',
        errorRegistration: null,
        errorLogin: null,

      };
    }
    case 'REGISTRATION_FAILURE': {
      console.log(action.error.response)
      let error = '';
      try{
        error = action.error.response.data
      }catch (e){
        error = action.error.toString().substring(7, action.error.toString().length)
      }
      return {
        ...state,
        errorRegistration: error,
        errorLogin: null,
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
    case 'GET_SHOPPING_LIST_SUCCESS':{
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
      const newShoppingList = [...state.shoppingList, {name: action.productName}];
      return {
        ...state,
        shoppingList: newShoppingList
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
    case 'UPDATE_HEIGHT_SUCCESS': {
      return {
        ...state,
        userDetails: {...state.userDetails, height: action.height}
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
    case 'UPDATE_ACTIVITY_SUCCESS':{
      return {
        ...state,
      }
    }
    case 'GET_TMR_SUCCESS':{
      return {
        ...state,
        userTMR: action.payload.data
      }
    }
    case 'GET_ARTICLES_SUCCESS': {
      return {
        ...state,
        articles: action.payload.data
      }
    }
    case 'GET_ARTICLE_SUCCESS': {
      return {
        ...state,
        article: action.payload.data
      }
    }
    case 'SEARCH_EXERCISES_SUCCESS':{
      return {
        ...state,
        findExercises: action.payload.data
      }
    }
    case 'NEXT_EXERCISE': {
      const temp = [...state.exercises, {exerciseName: action.name,
        series:[]}]
      return {
        ...state,
        presentExercise: action.name,
        exercises: temp
      }
    }
    case 'ADD_SERIES':{
      const temp = state.exercises.map((item, index)=>action.id===index ? {...item,
      series:[...item.series, {weight: 'empty', repeatNumber: 'empty'}]} : item);
      return {
        ...state,
        exercises: temp
      }
    }
    case 'UPDATE_SERIES':{
      const temp = state.exercises.map((item, index)=>action.payload.exerciseId === index ? {...item,
        series: item.series.map((series, index)=>index===action.payload.seriesId ? {numberRepeat: action.payload.numberRepeat, weight: action.payload.weight} : series)
      } : item)
      return {
        ...state,
        exercises: temp
      }
    }
    case 'DELETE_SERIES':{
      const temp = state.exercises.map((item, index)=>action.payload.exerciseId===index ? {...item,
        series: item.series.filter((series, index) => index !== action.payload.seriesId)} : item);
      return {
        ...state,
        exercises: temp
      }
    }
    case 'DELETE_EXERCISE':{
      const temp = state.exercises.filter((item, index) => index !== action.exerciseId);
      return {
        ...state,
        exercises: temp
      }
    }
    case 'SAVE_TRAINING_SUCCESS':{
      return {
        ...state,
        exercises: []
      }
    }

    default:
      return state;
  }

};

export default rootReducer;
