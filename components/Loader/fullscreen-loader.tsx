import Image from "next/image";
import logo from "../../public/assets/brands/logo.svg";
import { PropagateLoader } from "react-spinners";

interface FullScreenLoaderProps {
  isLoading: boolean;
}

export default function FullScreenLoader({ isLoading }: FullScreenLoaderProps) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-white/80 backdrop-blur-sm transition-opacity duration-500">
      <div className="text-center">
        <Image
          src={logo}
          alt="Loading..."
          className="mx-auto mb-6 h-24 w-24 animate-pulse md:h-auto md:w-48"
        />
        <PropagateLoader color="#F470AB" size={10} />{" "}
      </div>
    </div>
  );
}
