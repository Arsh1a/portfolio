import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = "", ...rest }: Props) => {
  return (
    <div {...rest} className={"max-w-7xl mx-auto p-6 " + className}>
      {children}
    </div>
  );
};
export default Container;
