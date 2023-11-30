import UserList from "@/components/User/UserList";
import db from "@/utils/db";

import Link from "next/link";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export type UserType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string;
  lastName: string;
  email: string;
  roleName: string;
};

const getUsers = async () => {
  const users = await db.users.findMany({});
  return users;
};

const UsersPage = async () => {
  const users: UserType[] = await getUsers();

  return (
    <Container>
      <Box>
        <Card>
          <Typography variant="h2" component="h1">
            Users
          </Typography>
        </Card>

        <UserList users={users} />

        <Link href="/users/add">Add User</Link>
      </Box>
    </Container>
  );
};

export default UsersPage;
