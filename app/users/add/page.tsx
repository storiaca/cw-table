import NewUserForm from "@/components/User/NewUserForm";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
const Adduser = () => {
  return (
    <Container>
      <Box>
        <Card>
          <Typography variant="h2" component="h1">
            Add User
          </Typography>
        </Card>
      </Box>
      <Box>
        <Card>
          <NewUserForm />
        </Card>
      </Box>
    </Container>
  );
};

export default Adduser;
