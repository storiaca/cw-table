import UpdateUserForm from "@/components/User/UpdateUserForm";
import db from "@/utils/db";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

type RoleIdType = {
  params: { id: string };
};

type SingleUserType = {
  id: number | string;
  createdAt?: Date;
  updatedAt?: Date;
  firstName: string;
  lastName: string;
  email: string;
  roleName: string;
};

const UpadateUserPage = async ({ params }: RoleIdType) => {
  const paramId = parseInt(params.id);
  const userData = (await db.users.findUnique({
    where: {
      id: paramId,
    },
  })) as SingleUserType;

  return (
    <Container>
      <Box>
        <Card>
          <Typography variant="h2" component="h1" align="center">
            Update User
          </Typography>
        </Card>

        <UpdateUserForm user={userData} />
      </Box>
    </Container>
  );
};

export default UpadateUserPage;
