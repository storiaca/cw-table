import { UserProps } from "./UserList";
import Link from "next/link";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

type UserSingleType = UserProps & {
  index: number;
};

const User = ({ id, index, firstName, lastName, roleName }: UserSingleType) => {
  return (
    <TableRow
      key={firstName}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {index}
      </TableCell>
      <TableCell align="right">{firstName}</TableCell>
      <TableCell align="right">{lastName}</TableCell>
      <TableCell align="right">{roleName}</TableCell>
      <TableCell align="right">
        <Link className="update-btn" href={`/users/update/${id}`}>
          Update
        </Link>
      </TableCell>
    </TableRow>
  );
};

export default User;
