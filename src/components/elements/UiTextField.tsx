import { TextField, FormControl, InputAdornment, SxProps } from "@mui/material";
import React, { useState } from "react";
import { UiIcon } from "./UiIcon";

interface Props {
  placeholder?: string;
  width?: string;
  icon?: string;
  onChange: (projectName: string) => void;

  sx?: SxProps;
}

export function UiInputField({
  sx,
  placeholder,
  width,
  icon,
  onChange,
}: Props) {
  const [value, setValue] = useState<string>("");

  return (
    <FormControl sx={{ ...sx }}>
      <TextField
        value={value}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ marginLeft: "10px" }}>
              {icon && <UiIcon icon={icon} />}
            </InputAdornment>
          ),
        }}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        sx={{
          borderColor: "blue",
          margin: "0px",
          "& label.Mui-focused": {
            color: "button.primary",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "button.primary",
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: "20px",
            fontSize: "16px",
            paddingLeft: "5px",
            color: "black",
            "& fieldset": {
              borderColor: "blue",
            },
            "&:hover fieldset": {
              borderColor: "blue",
            },
            "&.Mui-focused fieldset": {
              borderColor: "blue",
            },
          },

          input: {
            "&::placeholder": {
              fontSize: "14px",
              paddingLeft: "0px",
            },
          },
        }}
        placeholder={placeholder}
        fullWidth
        margin="normal"
      />
    </FormControl>
  );
}
