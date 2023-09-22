import Button from "@mui/material/Button";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Home() {
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/feeling");
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
                Welcome!
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ wordWrap: "break-word" }}
              >
                We appreciate any feedback you provide. You should not feel
                pressured to answer any questions in this form and submission is
                optional.
              </Typography>
              <CardActions style={{ justifyContent: "center" }}>
                <form onSubmit={handleSubmit}>
                  <Button
                    type="submit"
                    variant="outlined"
                    size="large"
                    color="success"
                  >
                    I'm ready to start!
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
