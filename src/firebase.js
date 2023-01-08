import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
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

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

const auth = getAuth();

export { database, auth };

//   const analytics = getAnalytics(app);

//   // named export
// export { firebaseConfig };

// // default export
// export default base;
