import { createSelector } from "reselect";

const selectShop = (state) => state.shop;
const selectCollectionId = (state, props) => props.match.params.collectionId;

const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsArray = createSelector(
  [selectCollections],
  (collections) => collections ? Object.keys(collections).map((key) => collections[key]) : []
)

export const selectCollection = createSelector(
  [
    selectCollections,
    selectCollectionId
  ],
  (collections, paramId) => {
    return collections ? collections[paramId] : null; 
  }
)

/* New fn called everytime so not memoized  
export const selectCollection = (urlParam) => createSelector(
  [selectCollections],
  (collections) => {
    return collections.find((collection) => collection.id === COLLECTION_ID_MAP[urlParam])
  }
); */