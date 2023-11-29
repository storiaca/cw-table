import { Input, InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
const NewUserForm = () => {
  return (
    <FormControl>
      <InputLabel htmlFor="my-input">Email address</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
    </FormControl>
  );
};

export default NewUserForm;
