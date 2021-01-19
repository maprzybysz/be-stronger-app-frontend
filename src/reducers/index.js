const initialState = {
  date: new Date(),
};

const rootReducer = (state = initialState, action) => {
  // console.log(state.date);
  // console.log(new Date(new Date(state.date).setDate(state.date.getDate() - 2)));
  // console.log(state.date);

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

    default:
      return state;
  }
};

export default rootReducer;
