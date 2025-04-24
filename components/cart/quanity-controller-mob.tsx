import { decrement, increment } from "@/public/assets/icons";
import Image from "next/image";

type Props = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

export const QuantityControlMob = ({
  quantity,
  onIncrease,
  onDecrease,
}: Props) => (
  <div
    style={{
      borderColor: "rgba(0, 0, 0, 0.10)",
    }}
    className="flex flex-col items-center justify-between rounded-[8px] border p-2"
  >
    <Image onClick={onDecrease} src={decrement} alt="min" className="h-6 w-6" />

    <span className="text-[14px] font-medium text-[#191818]">{quantity}</span>

    <Image onClick={onIncrease} src={increment} alt="min" className="h-6 w-6" />
  </div>
);
