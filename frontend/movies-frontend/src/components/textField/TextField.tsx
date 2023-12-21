import React from "react";
import TextField, { TextFieldVariants } from "@mui/material/TextField";

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: TextFieldVariants;
  placeholder: string;
  label?: string;
}

function MTextField({
  value,
  placeholder,
  onChange,
  label = "",
  variant,
}: Props) {
  return (
    <TextField
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      label={label}
      variant={variant}
      size="small"
      style={{ width: "20rem" }}
    />
  );
}

export default MTextField;
