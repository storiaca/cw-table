import { newRole } from "@/utils/actions";
import { TextField, Button } from "@mui/material";
import FormControl from "@mui/material/FormControl";
const NewRoleForm = () => {
  return (
    <form action={newRole}>
      <FormControl>
        <TextField
          id="roleName"
          type="text"
          variant="outlined"
          color="secondary"
          name="roleName"
          label="Role Name"
          fullWidth
          required
        />
      </FormControl>
      <FormControl>
        <TextField
          id="description"
          type="text"
          variant="outlined"
          color="secondary"
          name="description"
          label="Description"
          fullWidth
          required
        />
      </FormControl>
      <Button variant="contained" type="submit">
        Add Role
      </Button>
    </form>
  );
};

export default NewRoleForm;
