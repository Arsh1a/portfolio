import React from "react";

interface Props extends React.ComponentPropsWithoutRef<"input"> {
  className?: string;
}

const Input = ({ className = "", ...rest }: Props) => {
  return <input className={"bg-neutral-100 p-3 rounded-lg " + className} {...rest} />;
};
export default Input;
