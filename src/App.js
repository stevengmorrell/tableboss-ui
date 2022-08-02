import { Button, ButtonGroup, Grid, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArmyName from "./pages/ArmyName";



function App() {
  return (
    <Box>
    <Grid container>
      <ArmyName/>
    </Grid>
    
    <Grid>
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
    </Grid>
    </Box>
  );
}

export default App;
