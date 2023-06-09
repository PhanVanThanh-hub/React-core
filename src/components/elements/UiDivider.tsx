import { Divider } from "@mui/material";

interface Props {
  sx?: any;
}

export const UiDivider = ({ sx }: Props) => {
  return (
    <Divider
      sx={{
        margin: "10px 0px",
        borderWidth: "0px 0px thin",
        borderStyle: "solid",
        borderColor: "rgba(145, 158, 171, 0.24)",
        ...sx,
      }}
    />
  );
};
