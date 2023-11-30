import NewRoleForm from "@/components/Role/NewRoleForm";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
const AddRole = () => {
  return (
    <Container>
      <Box>
        <Card>
          <Typography variant="h2" component="h1">
            Add Role
          </Typography>
        </Card>
        <NewRoleForm />
      </Box>
    </Container>
  );
};

export default AddRole;
