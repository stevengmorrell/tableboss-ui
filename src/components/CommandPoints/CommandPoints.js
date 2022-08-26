import { Rating } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import { ReactComponent as PinkCommandPoints } from "./PinkCommandPoints.svg";
import { ReactComponent as EmptyCommandPoints } from "./EmptyCommandPoints.svg";
import { ReactComponent as BlueCommandPoints } from "./BlueCommandPoints.svg";

function CommandPoints() {
  return (
    <Box>
      <Rating
        defaultValue={0}
        max={15}
        icon={<PinkCommandPoints />}
        emptyIcon={<EmptyCommandPoints />}
      />
      <Rating
        defaultValue={0}
        max={15}
        icon={<BlueCommandPoints />}
        emptyIcon={<EmptyCommandPoints />}
      />
    </Box>
  );
}

export default CommandPoints;
