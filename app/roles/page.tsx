import RoleList from "@/components/Role/RoleList";
import Link from "next/link";
import db from "@/utils/db";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export type RoleType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  roleName: string;
  description: string;
};

const getRoles = async () => {
  const roles = await db.roles.findMany({});
  return roles;
};

const RolesPage = async () => {
  const roles: RoleType[] = await getRoles();
  return (
    <Container>
      <Box>
        <Card>
          <Typography variant="h2" component="h1">
            Roles
          </Typography>
        </Card>
      </Box>
      <RoleList roles={roles} />
      <Link href="/roles/add">Add Role</Link>
    </Container>
  );
};

export default RolesPage;
