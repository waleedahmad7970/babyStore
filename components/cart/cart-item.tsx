import Image, { StaticImageData } from "next/image";
import { QuantityControl } from "./quanity-controller";
import { cartAction } from "@/store/slices/cart.slice";
import { useAppDispatch } from "@/store/hooks";
import { aedIcon } from "@/public/assets/icons";

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

export const CartItem = ({ product }: CartItemProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex items-center justify-between py-6">
      <div className="flex w-full max-w-[354px] items-center justify-between gap-6">
        <button
          onClick={() =>
            dispatch(cartAction.toggleCheckoutProduct(product?.id))
          }
          className={`h-6 min-w-6 cursor-pointer rounded-[3px] border border-[#E0E0E0] ${product?.isCheckoutProduct ? "bg-[#E7448C]" : "bg-white"} `}
        ></button>
        <div className="flex items-center justify-between gap-3">
          <div className="relative h-[80px] w-[80px] overflow-hidden rounded-[6px] border-1 border-[#E0E0E0]">
            <Image
              src={`https://www.babystore.ae/storage/${product?.image}`}
              alt={product?.name}
              fill
              className="relative h-full w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <p className="text-[16px] leading-[24px] font-normal text-[#000]">
              {product?.name}
            </p>
            <p className="text-[13px] leading-[18px] font-semibold text-[#54A3FA] italic">
              Free Delivery
            </p>
          </div>
        </div>
      </div>
      <div className="min-w-[103px]">
        <QuantityControl
          quantity={product?.quantity}
          onIncrease={() => dispatch(cartAction.incrementQuantity(product?.id))}
          onDecrease={() => dispatch(cartAction.decrementQuantity(product?.id))}
        />
      </div>
      <p className="flex w-full max-w-[112px] items-center justify-center text-center text-[20px] font-semibold text-[#1C1C1C]">
        <Image src={aedIcon} className="h-[20px] w-[20px]" alt="curr" />{" "}
        {product.price.toFixed(2)}
      </p>
      <p className="flex w-full max-w-[112px] items-center justify-center text-center text-[20px] font-semibold text-[#1C1C1C]">
        <Image src={aedIcon} className="h-[20px] w-[20px]" alt="curr" />{" "}
        {(product.price * product.quantity).toFixed(2)}
      </p>
      <button
        style={{
          borderColor: "rgba(0, 0, 0, 0.10)",
        }}
        onClick={() => dispatch(cartAction.removeCartItem(product?.id))}
        className="max-w-[102px] cursor-pointer rounded-[50px] border-1 px-5 py-[10px] text-[16px] font-semibold text-[#FA3434]"
      >
        Remove
      </button>
    </div>
  );
};
