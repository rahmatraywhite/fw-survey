import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

const app = {
    apiKey: "AIzaSyA4DAW5b3i2Er8zinbj9V8PooHXCXtZsdg",
    authDomain: "survey-app-c1556.firebaseapp.com",
    projectId: "survey-app-c1556",
    storageBucket: "survey-app-c1556.appspot.com",
    messagingSenderId: "338384805202",
    appId: "1:338384805202:web:4ae81491bc2d18463fae8b"
};


export const db = firebase.initializeApp(app).firestore()
export default app;