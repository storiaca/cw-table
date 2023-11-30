import User from "./User";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export type UserProps = {
  id: string;
  createdAt?: Date;
  firstName: string;
  lastName: string;
  email?: string;
  roleName: string;
};

const UserList = ({ users }: UserProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>N</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Role Name</TableCell>
            <TableCell align="right">Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user: UserProps, index: number) => (
            <User
              key={user.id}
              id={user.id}
              index={index + 1}
              firstName={user.firstName}
              lastName={user.lastName}
              roleName={user.roleName}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserList;
