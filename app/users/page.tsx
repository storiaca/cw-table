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
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const users = await db.users.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return users;
};

const UsersPage = async () => {
  const users: UserType[] = await getUsers();

  return (
    <Container>
      <Box>
        <Card>
          <Typography variant="h2" component="h1" align="center">
            Users
          </Typography>
        </Card>
      </Box>
      <UserList users={users} />
      <Box sx={{ textAlign: "right", paddingTop: "30px" }}>
        <Link className="link-btn" href="/users/add">
          Add User
        </Link>
      </Box>
    </Container>
  );
};

export default UsersPage;
