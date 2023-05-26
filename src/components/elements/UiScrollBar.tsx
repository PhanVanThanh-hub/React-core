import { Col } from "./Col";

interface Props {
  height?: string;
  children: React.ReactNode;
  ref?: any;
}

const UiScrollBar = ({ ref, height, children }: Props) => {
  return (
    <Col
      ref={ref}
      sx={{
        overflowY: "auto",
        height: height || "99%",
        overflowX: "hidden",
        "&::-webkit-scrollbar": {
          position: "absolute",
          width: "0.4em",
          paddingRight: "10px",
        },
        "&::-webkit-scrollbar-track": {
          boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
          webkitBoxShadow: "inset 0 0 6px rgb(10, 15, 35)",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(187, 225, 250, 0.5)",
          position: "absolute",
          outline: "1px solid rgba(187, 225, 250, 0.5)",
          borderRadius: "12px",
        },
      }}
    >
      {children}
    </Col>
  );
};

export default UiScrollBar;
