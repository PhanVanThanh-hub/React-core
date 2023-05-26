import { Box } from "@mui/material";

export const Col = (p: any) => {
  try {
    return <Box display="flex" flexDirection="column" ref={p.children.ref} {...p} />;
  } catch (e) {
    return <Box display="flex" flexDirection="column" {...p} />;
  }
};
