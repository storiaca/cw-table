import { RoleProps } from "./RoleList";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
const Role = ({ roleName, description }: RoleProps) => {
  return (
    <TableRow
      key={roleName}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {roleName}
      </TableCell>
      <TableCell align="right">{description}</TableCell>
    </TableRow>
  );
};

export default Role;
