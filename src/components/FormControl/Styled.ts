import { SxProps } from "@mui/material";

export const TextFieldStyled: SxProps = {
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
      borderColor: "button.primary",
    },
    "&:hover fieldset": {
      borderColor: "button.primary",
    },
    "&.Mui-focused fieldset": {
      borderColor: "button.primary",
    },
  },

  input: {
    "&::placeholder": {
      fontSize: "14px",
      paddingLeft: "0px",
    },
  },
};
