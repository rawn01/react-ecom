import { FETCH_COLLECTIONS_FAILURE, FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS } from "../actionEnum";

const initialData = {
  // collections: SHOP_DATA
  collections: null,
  isFetching: true
};

const shopReducer = (state = initialData, action) => {
  switch(action.type) {
    case FETCH_COLLECTIONS_START: 
      return {
        ...state,
        isFetching: true
      }

    case FETCH_COLLECTIONS_SUCCESS: 
      return {
        ...state,
        collections: action.payload,
        isFetching: false
      }
    case FETCH_COLLECTIONS_FAILURE: 
      return {
        ...state,
        isFetching: false
      }
    default:
      return state;
  }
}

export default shopReducer;