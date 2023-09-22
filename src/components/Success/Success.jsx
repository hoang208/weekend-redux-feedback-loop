import Button from "@mui/material/Button";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";

export default function Success() {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    history.push("/");
    dispatch({
        type: "RESET",
      });
  };
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="90vh"
        sx={{ lineHeight: 2 }}
      >
        <Container maxWidth="sm">
          <Card variant="outlined">
            <CardContent>
              <Typography
                variant="h3"
                align="center"
                style={{ wordWrap: "break-word" }}
                component="div"
              >
                Success
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ wordWrap: "break-word" }}
              >
                Thank you for filling out the feedback form! We look forward to reading your feedback.
              </Typography>
              <CardActions style={{justifyContent: 'center'}}>
                <form onSubmit={handleSubmit}>
                  <Button
                    type="submit"
                    variant="outlined"
                    size="large"
                    color="success"
                    
                  >
                    Leave New Feedback
                  </Button>
                </form>
              </CardActions>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
}
