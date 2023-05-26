import { TextField, FormLabel, FormControl } from "@mui/material";
import * as React from "react";
import { Control, useController } from "react-hook-form";
import { COLOR } from "../../constants";
import { TextFieldStyled } from "./Styled";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
  label?: string;
}

export function PasswordField({ name, control, label, ...inputProps }: InputFieldProps) {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { error, invalid },
  } = useController({ name, control });
  return (
    <FormControl sx={{ ...inputProps }}>
      <FormLabel
        sx={{
          fontSize: "0.875rem",
          color: error ? COLOR.label.error : COLOR.label.default,
          fontWeight: "600",
          marginBottom: "8px",
          lineHeight: "1.4375em",
        }}
      >
        {label}
      </FormLabel>
      <TextField
        sx={{ ...TextFieldStyled }}
        value={value}
        type="password"
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        error={invalid}
        helperText={error?.message}
        inputProps={inputProps}
        fullWidth
        margin="normal"
      />
    </FormControl>
  );
}
