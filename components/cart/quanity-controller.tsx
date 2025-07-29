import { decrement, increment } from "@/public/assets/icons";
import Image from "next/image";

type Props = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  className?: string;
};

export const QuantityControl = ({
  quantity,
  onIncrease,
  onDecrease,
  className,
}: Props) => (
  <div
    style={{
      borderColor: "rgba(0, 0, 0, 0.10)",
    }}
    className={`flex items-center justify-between rounded-[8px] border p-2 ${className}`}
  >
    <Image
      onClick={onDecrease}
      src={decrement}
      alt="min"
      className="h-6 w-6 cursor-pointer"
    />

    <span className="text-[14px] font-medium text-[#191818]">{quantity}</span>

    <Image
      onClick={onIncrease}
      src={increment}
      alt="min"
      className="h-6 w-6 cursor-pointer"
    />
  </div>
);
