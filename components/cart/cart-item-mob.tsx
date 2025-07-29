import Image from "next/image";
import { cartAction } from "@/store/slices/cart.slice";
import { useAppDispatch } from "@/store/hooks";
import { QuantityControl } from "./quanity-controller";
import { QuantityControlMob } from "./quanity-controller-mob";

type CartItemProps = {
  product: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
    isCheckoutProduct?: boolean;
  };
};

export const CartItemMob = ({ product }: CartItemProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex items-center justify-between gap-4 py-6">
      <div className="flex w-full max-w-[354px] items-center justify-start gap-4">
        <button
          onClick={() =>
            dispatch(cartAction.toggleCheckoutProduct(product?.id))
          }
          className={`h-4 min-w-4 cursor-pointer rounded-[3px] border border-[#E0E0E0] ${product?.isCheckoutProduct ? "bg-[#E7448C]" : "bg-white"} `}
        ></button>{" "}
        <div className="flex items-center justify-between gap-[11px]">
          <div className="relative h-[80px] max-w-[80px] min-w-[80px] overflow-hidden rounded-[6px] border-1 border-[#E0E0E0]">
            <Image
              src={`https://www.babystore.ae/storage/${product?.image}`}
              alt={product?.name}
              fill
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[12px] leading-normal font-normal text-[#000]">
              {product?.name}
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
          onIncrease={() => dispatch(cartAction.incrementQuantity(product?.id))}
          onDecrease={() => dispatch(cartAction.decrementQuantity(product?.id))}
        />
      </div>
      <div className="block md:hidden">
        <QuantityControlMob
          quantity={product.quantity}
          onIncrease={() => dispatch(cartAction.incrementQuantity(product?.id))}
          onDecrease={() => dispatch(cartAction.decrementQuantity(product?.id))}
        />
      </div>
    </div>
  );
};
