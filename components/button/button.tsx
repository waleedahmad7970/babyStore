import React from "react";

interface ButtonProps {
  text?: string;
  handler?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text = "Buy Now",
  handler,
  className = "w-full max-w-xs py-3 text-white bg-gray-800 rounded-full hover:bg-gray-700 active:bg-gray-900 transition-all duration-200 shadow-md",
}) => {
  return (
    <button onClick={handler} className={className}>
      {text}
    </button>
  );
};

export default Button;
