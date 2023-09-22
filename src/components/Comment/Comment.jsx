import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Card, CardContent, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Comment() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [comment, setComment] = useState({ comment: "N/A" });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_COMMENT",
      payload: comment,
    });
    history.push("/review");
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="90vh"
      >
        <Container maxWidth="sm">
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Any comments you want to leave?
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  id="outlined-basic"
                  label="Comment"
                  variant="outlined"
                  helperText="Comments are optional"
                  onChange={(event) =>
                    setComment({
                      ...comment,
                      comment: event.target.value,
                    })
                  }
                ></TextField>
                <Button
                  type="submit"
                  variant="text"
                  size="large"
                  disableElevation
                  color="success"
                >
                  Next
                </Button>
              </form>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
}
