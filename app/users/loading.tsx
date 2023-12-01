import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
export default function LoadingUsers() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}
