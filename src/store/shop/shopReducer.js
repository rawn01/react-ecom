import { UPDATE_COLLECTIONS } from "../actionEnum";

const initialData = {
  // collections: SHOP_DATA
  collections: null
};

const shopReducer = (state = initialData, action) => {
  switch(action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      }
    default:
      return state;
  }
}

export default shopReducer;