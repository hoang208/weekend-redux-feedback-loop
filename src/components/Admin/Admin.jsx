import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {
  Card,
  CardContent,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function Admin() {
  const dispatch = useDispatch();
  const feedbackList = useSelector((store) => store.feedbackList);

  useEffect(() => {
    getFeedback();
  }, []);

  const getFeedback = () => {
    axios
      .get("/feedback")
      .then((response) => {
        dispatch({
          type: "GET_FEEDBACK",
          payload: response.data,
        });
      })
      .catch((err) => {
        alert("error getting feedback");
        console.log(err);
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
        <Card variant="outlined">
          <CardContent>
            <Typography
              variant="h5"
              align="center"
              style={{ wordWrap: "break-word" }}
            >
              Feedback
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Feeling</TableCell>
                    <TableCell>Understanding</TableCell>
                    <TableCell>Support</TableCell>
                    <TableCell>Comments</TableCell>
                    <TableCell>Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {feedbackList.map((feedback) => (
                    <TableRow
                      key={feedback.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {feedback.feeling}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {feedback.understanding}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {feedback.support}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {feedback.comments}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <Button
                          color="error"
                          onClick={() => {
                            axios
                              .delete(`/feedback/${feedback.id}`, feedback)
                              .then((response) => {
                                getFeedback();
                              })
                              .catch((error) => {
                                console.log(error);
                                alert(
                                  `Error deleting. Try again later`
                                );
                              });
                          }}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
