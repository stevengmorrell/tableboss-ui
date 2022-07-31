// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

import { Button, ButtonGroup } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

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
    <ButtonGroup variant='contained' aria-label='outlined primary button group'>
      <Button component={RouterLink} to='/creategame'>
        Create Game
      </Button>
      <Button component={RouterLink} to='/overlay'>
        Overlay
      </Button>
      <Button component={RouterLink} to='/managegames'>
        Manage Games
      </Button>
    </ButtonGroup>
  );
}

export default App;
