import { UPDATE_COLLECTIONS } from "../actionEnum";

export const updateCollections = (collectionsMap) => {
  return {
    type: UPDATE_COLLECTIONS,
    payload: collectionsMap
  }
};