import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Card, CardContent, MenuItem, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Supported() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [rating, setRating] = useState(3);

  const ratings = [
    {
      value: 1,
    },
    {
      value: 2,
    },
    {
      value: 3,
    },
    {
      value: 4,
    },
    {
      value: 5,
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_SUPPORTED",
      payload: rating,
    });
    history.push("/comment");
  };

  const handleBack = (event) => {
    event.preventDefault();
    dispatch({
      type: "DELETE_UNDERSTANDING",
    });
    history.push("/understanding");
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
                How well are you being supported?
              </Typography>
              <form>
                <TextField
                  id="rating-select"
                  select
                  label="Supported"
                  helperText="Please select your rating"
                  defaultValue="3"
                  onChange={(event) => setRating(event.target.value)}
                >
                  {ratings.map((rating) => (
                    <MenuItem key={rating.value} value={rating.value}>
                      {rating.value}
                    </MenuItem>
                  ))}
                </TextField>
                <Button
                  type="submit"
                  variant="text"
                  size="large"
                  disableElevation
                  color="success"
                  onClick={handleSubmit}
                >
                  Next
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
