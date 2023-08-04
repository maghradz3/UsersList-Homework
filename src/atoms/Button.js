import { Button as MUIButton } from "@mui/material";
export const Button = ({ onClick, children, ...rest }) => {
  return (
    <MUIButton onClick={onClick} {...rest}>
      {children}
    </MUIButton>
  );
};
