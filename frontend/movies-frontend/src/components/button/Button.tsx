import { ReactNode } from "react";
import Button from "@mui/material/Button";

interface Props {
  title: string;
  variant: "contained" | "text" | "outlined";
  onClick: Function;
  icon?: ReactNode;
}

export default function MButton({
  title,
  onClick,
  variant = "contained",
  icon,
}: Props) {
  return (
    <Button
      className="Mbutton"
      style={{ width: "12rem" }}
      onClick={() => onClick()}
      variant={variant}
      endIcon={icon && icon}
    >
      {title}
    </Button>
  );
}
