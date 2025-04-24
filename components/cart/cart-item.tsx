import Image, { StaticImageData } from "next/image";
import { QuantityControl } from "./quanity-controller";

type CartItemProps = {
  product: {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string | StaticImageData;
  };
  onRemove: () => void;
  onQuantityChange: (amount: number) => void;
};

export const CartItem = ({
  product,
  onRemove,
  onQuantityChange,
}: CartItemProps) => (
  <div className="flex items-center justify-between py-6">
    <div className="flex w-full max-w-[354px] items-center justify-between gap-6">
      <div className="h-6 min-w-6 rounded-[3px] border border-[#E0E0E0] bg-white"></div>
      <div className="flex items-center justify-between gap-3">
        <div className="h-[80px] w-[80px] overflow-hidden rounded-[6px] border-1 border-[#E0E0E0]">
          <Image
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1">
          <p className="text-[16px] leading-[24px] font-normal text-[#000]">
            {product.title}
          </p>
          <p className="text-[13px] leading-[18px] font-semibold text-[#54A3FA] italic">
            Free Delivery
          </p>
        </div>
      </div>
    </div>
    <div className="min-w-[103px]">
      <QuantityControl
        quantity={product.quantity}
        onIncrease={() => onQuantityChange(product.quantity + 1)}
        onDecrease={() => onQuantityChange(product.quantity - 1)}
      />
    </div>
    <p className="w-full max-w-[112px] text-center text-[20px] font-semibold text-[#1C1C1C]">
      AED {product.price.toFixed(2)}
    </p>
    <p className="w-full max-w-[112px] text-center text-[20px] font-semibold text-[#1C1C1C]">
      AED {(product.price * product.quantity).toFixed(2)}
    </p>
    <button
      style={{
        borderColor: "rgba(0, 0, 0, 0.10)",
      }}
      onClick={onRemove}
      className="max-w-[102px] rounded-[50px] border-1 px-5 py-[10px] text-[16px] font-semibold text-[#FA3434]"
    >
      Remove
    </button>
  </div>
);
