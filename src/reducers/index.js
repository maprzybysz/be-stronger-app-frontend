const initialState = {
  calories: 110,
  protein: 10,
  carbohydrate: 20,
  fat: 30,
};

const rootReducer = (state = initialState, action) => {
  // console.log(action.payload);

  switch (action.type) {
    case 'ADD_FOOD':
      console.log(action.payload.food.calories);
      return {
        ...state,
        calories: state.calories + +100,
      };
    default:
      return state;
  }
};

export default rootReducer;
