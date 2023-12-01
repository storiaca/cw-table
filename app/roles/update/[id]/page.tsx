import UpdateRoleForm from "@/components/Role/UpdateRoleForm";
import db from "@/utils/db";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

type RoleIdType = {
  params: { id: string };
};

type SingleRoleType = {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
  roleName: string;
  description: string;
};

const UpdateRolePage = async ({ params }: RoleIdType) => {
  const roleData = (await db.roles.findUnique({
    where: {
      id: params.id,
    },
  })) as SingleRoleType;

  return (
    <Container>
      <Box>
        <Card>
          <Typography variant="h2" component="h1" align="center">
            Update Role
          </Typography>
        </Card>

        <UpdateRoleForm role={roleData} />
      </Box>
    </Container>
  );
};

export default UpdateRolePage;
