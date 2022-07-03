import React from "react";

interface Props extends React.ComponentPropsWithRef<"button"> {
  children: React.ReactNode;
  className?: string;
}

const Button = React.forwardRef<any, Props>(function Button({ children, className, ...rest }, ref) {
  return (
    <button
      {...rest}
      className={
        "bg-neutral-800 hover:bg-neutral-700 transition duration-300 text-white px-6 py-3 rounded-xl " +
        className
      }
    >
      {children}
    </button>
  );
});
export default Button;
