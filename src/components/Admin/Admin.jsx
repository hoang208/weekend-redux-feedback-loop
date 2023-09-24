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
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import AdminItem from "./AdminItem";

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
                    <TableCell>Review</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {feedbackList.map((feedback) => (
                    <AdminItem
                      key={feedback.id}
                      id={feedback.id}
                      feeling={feedback.feeling}
                      understanding={feedback.understanding}
                      support={feedback.support}
                      comments={feedback.comments}
                      flagged={feedback.flagged}
                      getFeedback={getFeedback}
                    />
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
