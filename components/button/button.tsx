import React from "react";
import { ClipLoader } from "react-spinners";

interface ButtonProps {
  text?: string | number;
  handler?: () => void;
  className?: string;
  type?: any;
  loading?: any;
  size?: any;
}

const Button: React.FC<ButtonProps> = ({
  text = "Buy Now",
  handler,
  type,
  loading,
  size = 20,
  className = "w-full max-w-xs py-3 text-white bg-gray-800 rounded-full hover:bg-gray-700 active:bg-gray-900 transition-all duration-200 shadow-md",
}) => {
  return (
    <button type={type} onClick={handler} className={className}>
      {loading ? <ClipLoader size={size} color="#1C2A54" /> : text}
    </button>
  );
};

export default Button;
