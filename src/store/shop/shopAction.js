import { getDocs } from "firebase/firestore";
import { convertCollectionsToMap, getCollections } from "../../firebase/firebase";
import { FETCH_COLLECTIONS_FAILURE, FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS } from "../actionEnum";

export const fetchCollectionsStart = () => {
  return {
    type: FETCH_COLLECTIONS_START
  }
}

export const fetchCollectionsSuccess = (collectionsMap) => {
  return {
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
  }
}

export const fetchCollectionsFailure = () => {
  return {
    type: FETCH_COLLECTIONS_FAILURE
  }
}

export const fetchCollectionsAsync = () => {
  return (dispatch) => {
    dispatch(fetchCollectionsStart());
    const collectionRef = getCollections();
    
    getDocs(collectionRef).then((item) => {
      const collectionsMap = convertCollectionsToMap(item);
      
      dispatch(fetchCollectionsSuccess(collectionsMap));
    }).catch((err) => {
      console.log(err);
      dispatch(fetchCollectionsFailure());
    })
  }
}