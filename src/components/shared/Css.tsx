import { SxProps } from "@mui/material";

export const TextFiledStyled: SxProps = {
  overflowY: "auto",
  width: "100%",
  "& .MuiOutlinedInput-input": {
    fontSize: "1rem",
    lineHeight: "20px",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "yellow",
  },
  "& .MuiOutlinedInput-root": {
    color: "black",
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
};

export const TextFiled2Styled: SxProps = {
  overflowY: "auto",
  width: "100%",
  "& .MuiOutlinedInput-input": {
    fontSize: "0.75rem",
    lineHeight: "20px",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "yellow",
  },
  "& .MuiOutlinedInput-root": {
    color: "black",
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
};
