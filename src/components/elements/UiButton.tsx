import { ButtonBaseProps } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

interface ButtonProps extends ButtonBaseProps {
  backgroundColor?: string;
  backgroundColorHover?: string;
  color?: string;
  colorHover?: string;
  variant?: "text" | "outlined" | "contained";
  width?: string;
  borderColor?: string;
  borderColorHover?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  sx?: any;
  loading?: boolean;
}

export const UiButton = ({
  children,
  type,
  backgroundColor = "#4963ED",
  backgroundColorHover,
  color = "text.primary",
  colorHover,
  variant = "text",
  width,
  borderColor,
  onClick,
  borderColorHover,
  sx,
  loading = false,
}: ButtonProps) => {
  return (
    <LoadingButton
      type={type}
      variant={variant}
      onClick={onClick}
      loading={loading}
      sx={{
        cursor: "pointer",
        backgroundColor: backgroundColor,
        color: color,
        borderColor: borderColor,
        margin: "10px 0px",
        borderRadius: "12px",
        padding: "5px 20px",
        textTransform: "capitalize",
        transition: "background-color 0.3s ease",
        width: width,
        "&:hover": {
          backgroundColor: backgroundColorHover || backgroundColor,
          color: colorHover || color,
          borderColor: borderColorHover,
        },
        ...sx,
      }}
    >
      {children}
    </LoadingButton>
  );
};

export const ButtonDefault = (p: any) => {
  return (
    <UiButton
      sx={{
        padding: "7px 40px",
        backgroundColor: "#FA541C",
        borderRadius: "24px",
        color: "white",

        "&:hover": {
          backgroundColor: "rgba(157, 31, 14, 1)",
        },
      }}
      {...p}
    />
  );
};
