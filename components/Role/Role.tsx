import { RoleProps } from "./RoleList";
import Link from "next/link";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

type RoleSingleType = RoleProps & {
  index: number;
};
const Role = ({ id, roleName, description, index }: RoleSingleType) => {
  return (
    <TableRow
      key={roleName}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {index}
      </TableCell>
      <TableCell align="right">{roleName}</TableCell>
      <TableCell align="right">{description}</TableCell>
      <TableCell align="right">
        <Link href={`/roles/update/${id}`}>Update</Link>
      </TableCell>
    </TableRow>
  );
};

export default Role;
