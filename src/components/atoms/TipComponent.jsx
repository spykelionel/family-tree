import { QuestionMark } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

export const TipComponent = ({ tip, Icon, ...props }) => (
  <Tooltip
    sx={{
      cursor: "pointer",
      background: "#000",
      color: "white",
      borderRadius: "50%",
      padding: "2px",
    }}
    title={tip ?? "Crime Report"}
    {...props}
  >
    {Icon ? Icon : <QuestionMark />}
  </Tooltip>
);
