import logo from './logo.svg';
import './App.css';

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC69UyXu11bwAopdXzYhwp-vZRaKViNovc",
//   authDomain: "tableboss-ui.firebaseapp.com",
//   projectId: "tableboss-ui",
//   storageBucket: "tableboss-ui.appspot.com",
//   messagingSenderId: "465758735406",
//   appId: "1:465758735406:web:823090c70227df273b63bf",
//   measurementId: "G-847JWHBWK9"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
