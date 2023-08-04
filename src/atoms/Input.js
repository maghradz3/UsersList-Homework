import { FormControl, TextField } from "@mui/material";
import React from "react";

export const Input = ({ name, label, onChange, value, error }) => {
  return (
    <FormControl>
      <TextField
        value={value}
        name={name}
        label={label}
        onChange={onChange}
        error={Boolean(error)}
        helperText={error}
      />
    </FormControl>
  );
};
