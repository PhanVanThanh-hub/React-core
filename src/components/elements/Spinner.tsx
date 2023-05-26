import { Box, BoxProps, CircularProgress } from "@mui/material";
import Styled from "styled-components";

const StyledSpinner = Styled(Box)`
  &.white {
    .MuiCircularProgress-root {
      color: button.hover;
    }
  }
  &.absolute {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: 10;
  }
  &.background-white {
    background: ${({ theme }) => theme.WHITE_70_PERCENT};
  }
  &.background-black {
    background: ${({ theme }) => theme.BLACK_30_PERCENT};
  }
`;

interface Props {
  size?: number | string;
  className?: string;
  boxProps?: BoxProps;
  color?: "default" | "white";
  position?: "relative" | "absolute";
  background?: "default" | "white" | "black";
}

export const Spinner = ({
  size = 40,
  className,
  color = "default",
  position = "relative",
  background = "default",
  ...props
}: Props) => {
  const boxProps = {
    ...props.boxProps,
    className,
  };
  return (
    <StyledSpinner
      sx={{ zIndex: "1111", height: "100vh", position: "fixed" }}
      {...boxProps}
      className={`${color} ${position} background-${background}`}
    >
      <CircularProgress sx={{ position: "absolute", left: 0, right: 0, marginLeft: "auto", marginRight: "auto" }} size={size} />
    </StyledSpinner>
  );
};
