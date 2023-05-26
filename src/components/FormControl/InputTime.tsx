import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Control, useController } from "react-hook-form";
import { FormHelperText, FormLabel } from "@mui/material";
import { Col } from "../elements";
import { COLOR } from "../../constants";
interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
  label?: string;
  multiline?: boolean;
  icon?: string;
}

export const InputTime = ({
  name,
  control,
  label,
  multiline,
  icon,
  ...inputProps
}: InputFieldProps) => {
  const {
    field: { onChange, ref },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Col>
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            onChange={(event: any) => {
              onChange(event.$d);
            }}
            ref={ref}
            sx={{
              margin: "0px",
              "& label.Mui-focused": {
                color: "button.primary",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "button.primary",
              },
              "& .MuiButtonBase-root .MuiPickersDay-root .MuiPickersDay-dayWithMargin .css-103zh1l-MuiButtonBase-root-MuiPickersDay-root":
                {
                  color: "red !important",
                },
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
                fontSize: "16px",
                paddingLeft: "5px",
                color: "rgb(0,0,0)",
                "& fieldset": {
                  borderColor: "button.primary",
                  color: "rgb(0,0,0)",
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
            }}
          />
        </LocalizationProvider>
        {error && (
          <FormHelperText sx={{ color: COLOR.label.error }}>
            {error?.message}
          </FormHelperText>
        )}
      </Col>
    </LocalizationProvider>
  );
};
