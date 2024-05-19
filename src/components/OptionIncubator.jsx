import { MenuItem, TextField } from "@mui/material";
import { useState } from "react";

/**
 * An option component. Having the native behavior of the HTML select element
 * @param {String} name The name of the Select component
 * @param {String} defaultValue The default option if no option is selected
 * @param {String[]} options The options for the select component
 * @param {Object} props Any other property
 * @returns The incubated select component
 */
export function OptionIncubator({ name, defaultValue, options, ...props }) {
  const [selectedOption, setSelectedOption] = useState(options[0] ?? "Input");
  const handleSelectedOption = (e) => setSelectedOption(e.target.value);
  return (
    <TextField
      id={name}
      select
      defaultValue={defaultValue ?? selectedOption}
      value={selectedOption}
      onChange={handleSelectedOption}
      name={name}
      sx={{
        border: "none",
        "& fieldset": { border: "none" },
        padding: "0 !important",
      }}
      InputProps={{}}
      m={0}
      {...props}
    >
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
}
