import * as React from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Typography } from "@mui/material";

const icon = (
  <Typography component="h4" variant="h1">
    Haris
  </Typography>
);

export default function SimpleSlide() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  React.useEffect(() => {
    handleChange();
  });

  return (
    <Box sx={{ height: 180 }}>
      <Box sx={{ width: `calc(100px + 16px)` }}>
        <Slide direction="down" in={checked} mountOnEnter unmountOnExit>
          {icon}
        </Slide>
      </Box>
    </Box>
  );
}
