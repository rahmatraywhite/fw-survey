import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

const app = {
  apiKey: "AIzaSyBtScTkMCxN884h6FUbq-CU8QPkuo29QK0",
  authDomain: "apk-survey.firebaseapp.com",
  projectId: "apk-survey",
  storageBucket: "apk-survey.appspot.com",
  messagingSenderId: "727708435852",
  appId: "1:727708435852:web:ccf6f2ca29bcdb593ec2a9",
  measurementId: "G-PL6TTR95MX"
};


export const db = firebase.initializeApp(app).firestore()
export default app;