import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Container>
      <Box>
        <Card>
          <Typography variant="h1" align="center">
            Welcome dear customer
          </Typography>
        </Card>
      </Box>
    </Container>
  );
}
