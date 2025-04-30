import Image, { StaticImageData } from "next/image";
import { QuantityControl } from "./quanity-controller";
import { QuantityControlMob } from "./quanity-controller-mob";

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

export const CartItemMob = ({
  product,
  onRemove,
  onQuantityChange,
}: CartItemProps) => (
  <div className="flex items-center justify-between gap-4 py-6">
    <div className="flex w-full max-w-[354px] items-center justify-between gap-4">
      <div className="h-4 min-w-4 rounded-[3px] border border-[#E0E0E0] bg-white"></div>
      <div className="flex items-center justify-between gap-[11px]">
        <div className="h-[80px] max-w-[80px] min-w-[80px] overflow-hidden rounded-[6px] border-1 border-[#E0E0E0]">
          <Image
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[12px] leading-normal font-normal text-[#000]">
            {product.title}
          </p>
          <p className="text-[12px] leading-[18px] font-semibold text-[#54A3FA] italic">
            Free Delivery
          </p>
          <p className="text-[14px] leading-[18px] font-semibold text-[#1C1C1C]">
            Free Delivery
          </p>
        </div>
      </div>
    </div>
    <div className="hidden min-w-[103px] md:block">
      <QuantityControl
        quantity={product.quantity}
        onIncrease={() => onQuantityChange(product.quantity + 1)}
        onDecrease={() => onQuantityChange(product.quantity - 1)}
      />
    </div>
    <div className="block md:hidden">
      <QuantityControlMob
        quantity={product.quantity}
        onIncrease={() => onQuantityChange(product.quantity + 1)}
        onDecrease={() => onQuantityChange(product.quantity - 1)}
      />
    </div>
  </div>
);
