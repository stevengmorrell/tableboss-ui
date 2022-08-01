import { Button, ButtonGroup } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";



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
