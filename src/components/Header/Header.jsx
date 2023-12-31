import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Button, Stack, Toolbar } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";

export default function Header() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleHome = () => {
    history.push("/");
    dispatch({
      type: "RESET",
    });
  };

  const handleAdmin = () => {
    history.push("/admin");
    dispatch({
      type: "RESET",
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#E0C1B3" }}>
        <Toolbar>
          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1 }}
            textAlign={"left"}
            gutterBottom
          >
            Feedback Form
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button onClick={handleHome} color="inherit">
              Home
            </Button>
            <Button onClick={handleAdmin} color="inherit">
              Admin
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
