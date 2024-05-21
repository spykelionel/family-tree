import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const Spinner = ({ ...props }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
