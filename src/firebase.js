import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAl6l6j_4qiwM_g1SViX0m9XXrz28xAXgU",
  authDomain: "website-44013.firebaseapp.com",
  databaseURL: "https://website-44013.firebaseio.com",
  projectId: "website-44013",
  storageBucket: "website-44013.appspot.com",
  messagingSenderId: "119336321291",
  appId: "1:119336321291:web:157999eccd718508fee20e",
  measurementId: "G-761DDCLK65",
});

export const auth = app.auth();
export default app;
