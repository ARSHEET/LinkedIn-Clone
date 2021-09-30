import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyDZC6gq4eg-jCosGlwIS9EeodJg6lX3lus",
    authDomain: "linkedin-clone-894a8.firebaseapp.com",
    projectId: "linkedin-clone-894a8",
    storageBucket: "linkedin-clone-894a8.appspot.com",
    messagingSenderId: "691497681867",
    appId: "1:691497681867:web:fbc09f525d92c7bc9aec4e"
  };

  const firebaseApp =  firebase.initializeApp(firebaseConfig);
  export const db = firebaseApp.firestore();
  export const auth = firebase.auth();
  

  // export { db, auth };