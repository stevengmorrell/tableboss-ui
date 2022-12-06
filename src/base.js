import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC69UyXu11bwAopdXzYhwp-vZRaKViNovc",
  authDomain: "tableboss-ui.firebaseapp.com",
  projectId: "tableboss-ui",
  storageBucket: "tableboss-ui.appspot.com",
  messagingSenderId: "465758735406",
  appId: "1:465758735406:web:823090c70227df273b63bf",
  measurementId: "G-847JWHBWK9",
  databaseURL:
    "https://tableboss-ui-default-rtdb.europe-west1.firebasedatabase.app",
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

const database = getDatabase(app);

//   // named export
// export { firebaseConfig };

// // default export
// export default base;

const provider = new GoogleAuthProvider();

const auth = getAuth();

const signInWithGoogle = () => signInWithPopup(auth, provider);
// .then((result) => {
//   // This gives you a Google Access Token. You can use it to access the Google API.
//   // const credential = GoogleAuthProvider.credentialFromResult(result);
//   // const token = credential.accessToken;
//   // The signed-in user info.
//   // const user = result.user;
//   // ...
// })
// .catch((error) => {
//   // Handle Errors here.
//   // const errorCode = error.code;
//   // const errorMessage = error.message;
//   // // The email of the user's account used.
//   // const email = error.customData.email;
//   // // The AuthCredential type that was used.
//   // const credential = GoogleAuthProvider.credentialFromError(error);
//   // ...
// });

export { database, auth, signInWithGoogle };
