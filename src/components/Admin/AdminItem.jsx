import { Button, TableCell, TableRow } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export default function AdminItem(props) {
  const [clicked, setClicked] = useState(props.flagged);
  const toggleClick = () => setClicked((value) => !value);

  const deleteFeedback = () => {
    axios
      .delete(`/feedback/${props.id}`, props)
      .then((response) => {
        props.getFeedback();
      })
      .catch((error) => {
        console.log(error);
        alert(`Error deleting. Try again later`);
      });
  };

  const updateFeedback = () => {
    axios
      .put(`/feedback/${props.id}`, props)
      .then((response) => {
        props.getFeedback();
        toggleClick();
      })
      .catch((error) => {
        console.log(error);
        alert(`Error deleting. Try again later`);
      });
  };

  return (
    <TableRow
      key={props.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {props.feeling}
      </TableCell>
      <TableCell component="th" scope="row">
        {props.understanding}
      </TableCell>
      <TableCell component="th" scope="row">
        {props.support}
      </TableCell>
      <TableCell component="th" scope="row">
        {props.comments}
      </TableCell>
      <TableCell component="th" scope="row">
        <Button color="error" onClick={deleteFeedback}>
          Delete
        </Button>
      </TableCell>
      <TableCell component="th" scope="row">
        {clicked ? (
          <Button color="error" onClick={updateFeedback}>
            Flag for Review
          </Button>
        ) : (
          <Button onClick={updateFeedback}>Unflag</Button>
        )}
      </TableCell>
    </TableRow>
  );
}
