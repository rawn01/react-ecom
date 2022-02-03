// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch } from "firebase/firestore";

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCvJ6GLgfmxrjUqgRP2IMvbG6rq1Fc9lro",
  authDomain: "myntra-clone-f0755.firebaseapp.com",
  projectId: "myntra-clone-f0755",
  storageBucket: "myntra-clone-f0755.appspot.com",
  messagingSenderId: "834130947952",
  appId: "1:834130947952:web:45f7e135c5f9a238f669b5"
};

export const createUserProfileDocument = async (userAuth, additionData) => {
  if(!userAuth) {
    return;
  }

  const userRef = doc(db, "users", userAuth.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionData
      })
    } catch(ex) {
      console.log("ex:", ex);
    }
  } 

  return userRef;
};

// To add data to firestore once
export const addCollectionAndDocs = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  
  // So that it doesn't fail halfway (sort of like transactions)
  const batch = writeBatch(db);

  objectsToAdd.forEach((item) => {
    const newDocRef = doc(collectionRef);
    batch.set(newDocRef, item);
  });
  
  await batch.commit();
}

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  'prompt': 'select_account'
});
export const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider)
  } catch(ex) {
    console.log("ex", ex);
  }
};

export const getCollections = () => collection(db, "collections");

export const convertCollectionsToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      id: doc.id,
      title,
      routeName: encodeURI(title.toLowerCase()),
      items,
    }
  })

  const collectionMap = transformedCollection.reduce((acc, doc) => {
    acc[doc.title.toLowerCase()] = doc;
    return acc;
  }, {})

  return collectionMap;
};