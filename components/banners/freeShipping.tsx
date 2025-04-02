interface Props {
  message?: string;
}

function FreeShipping({ message = "FREE SHIPPING" }: Props) {
  return (
    <p className="bg-primary py-[10px] text-center text-[16px] leading-[12px] font-semibold text-[#E7448C] md:py-[18px] md:text-[24px] md:leading-[24px]">
      {message}
    </p>
  );
}

export default FreeShipping;
