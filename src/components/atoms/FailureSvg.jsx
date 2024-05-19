import { Box } from "@mui/material";
import React from "react";

function FailureSvg() {
  return (
    <Box className="text-center">
      <svg
        width="150"
        height="162"
        viewBox="0 0 162 162"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M81 10.125C41.5125 10.125 10.125 41.5125 10.125 81C10.125 120.488 41.5125 151.875 81 151.875C120.488 151.875 151.875 120.488 151.875 81C151.875 41.5125 120.488 10.125 81 10.125ZM108.338 116.438L81 89.1L53.6625 116.438L45.5625 108.338L72.9 81L45.5625 53.6625L53.6625 45.5625L81 72.9L108.338 45.5625L116.438 53.6625L89.1 81L116.438 108.338L108.338 116.438Z"
          fill="#F24E1E"
        />
      </svg>
    </Box>
  );
}

export default FailureSvg;
