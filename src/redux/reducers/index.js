const initialState = {
  favourites: {
    list: []
  }
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVOURITE':
      return {
        ...state,
        favourites: {
          ...state.favourites,
          list: [...state.favourites.list, action.payload]
        }
      };
    case 'REMOVE_FROM_FAVOURITE':
      return {
        ...state,
        favourites: {
          ...state.favourites,
          list: state.favourites.list.filter((fav) => fav._id !== action.payload._id)
        }
      };
    default:
      return state;
  }
};

export default mainReducer;