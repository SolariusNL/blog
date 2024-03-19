import clsx from "@/util/clsx";
import { UnstyledButton, UnstyledButtonProps } from "@mantine/core";
import { forwardRef } from "react";
import classes from "./hover-icon.module.css";

type HoverIconProps = UnstyledButtonProps & {
  ref?: React.ForwardedRef<HTMLButtonElement>;
  children: React.ReactNode;
};

const HoverIcon = forwardRef<HTMLButtonElement, HoverIconProps>(
  (props, ref) => {
    return (
      <UnstyledButton className={clsx(classes["hover-icon"])} ref={ref}>
        <div className={props.className}>{props.children}</div>
      </UnstyledButton>
    );
  }
);

export default HoverIcon;
