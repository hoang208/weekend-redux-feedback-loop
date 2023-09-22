import { useState } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Alert, Card, CardContent, Snackbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

export default function Review() {
  const dispatch = useDispatch();
  const feeling = useSelector((store) => store.feeling);
  const understanding = useSelector((store) => store.understanding);
  const supported = useSelector((store) => store.supported);
  const comment = useSelector((store) => store.comment);
  const history = useHistory();
  const [review, setReview] = useState({
    feeling: feeling,
    understanding: understanding,
    support: supported,
    comments: comment.comment,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`/feedback`, review)
      .then((response) => {
        setReview({
          feeling: "",
          understanding: "",
          support: "",
          comments: "",
        });
        history.push("/success");
      })
      .catch((error) => {
        console.log(error);
        alert(`Sorry, couldn't submit review at this time. Try again later`);
      });
  };

  const handleBack = (event) => {
    event.preventDefault();
    dispatch({
      type: "DELETE_COMMENT",
    });
    history.push("/comment");
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
              <Typography
                variant="h3"
                align="center"
                style={{ wordWrap: "break-word" }}
              >
                Review Your Feedback
              </Typography>
              <Typography variant="h5" gutterBottom>
                Feelings: {feeling}
              </Typography>
              <Typography variant="h5" gutterBottom>
                Feelings: {understanding}
              </Typography>
              <Typography variant="h5" gutterBottom>
                Feelings: {supported}
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                align="center"
                style={{ wordWrap: "break-word" }}
              >
                Comments: {comment.comment}
              </Typography>
              <form>
                <Button
                  type="submit"
                  variant="text"
                  size="large"
                  disableElevation
                  color="success"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
                <Button
                  type="submit"
                  variant="text"
                  size="large"
                  disableElevation
                  color="error"
                  onClick={handleBack}
                >
                  GO BACK
                </Button>
              </form>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
}
