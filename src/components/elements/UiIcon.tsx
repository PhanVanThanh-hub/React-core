import { Icon } from "@iconify/react";
import { COLOR } from "../../constants";

interface Props {
  icon: string;
  onClick?: any;
  size?: string;
  color?: string;
  position?: "static" | "relative" | "absolute" | "sticky" | "fixed";
}

export const UiIcon = ({ icon, onClick, size = "24px", color = COLOR.icon.primary, position = "relative" }: Props) => {
  return (
    <Icon
      icon={icon}
      onClick={onClick}
      style={{
        width: size,
        height: size,
        color: color,
        cursor: "pointer",
        position: position,
      }}
    />
  );
};
