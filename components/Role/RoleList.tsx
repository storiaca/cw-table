import Role from "./Role";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export type RoleProps = {
  id: string;
  roleName: string;
  description: string;
};

const RoleList = ({ roles }: RoleProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "700" }}>NR</TableCell>
            <TableCell align="right" sx={{ fontWeight: "700" }}>
              Role Name
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "700" }}>
              Description
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "700" }}>
              Update
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {roles.map((role: RoleProps, index: number) => (
            <Role
              key={role.id}
              id={role.id}
              index={index + 1}
              roleName={role.roleName}
              description={role.description}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RoleList;
