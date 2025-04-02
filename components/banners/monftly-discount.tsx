import { StripesLight } from "@/public/assets/banner";
import Image from "next/image";

interface Props {
  message?: string;
}

function MonthlyDiscount({ message = "15% OFF ON 1st 3 ORDERS" }: Props) {
  return (
    <div className="relative h-[60px] w-full bg-[#7BC870]">
      <Image
        src={StripesLight}
        alt="bann"
        className="absolute h-[60px] w-full"
      />
    </div>
  );
}

export default MonthlyDiscount;
