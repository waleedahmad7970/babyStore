import Image from "next/image";
interface Props {
  Img: string;
  className?: string;
}

function Banner({ Img, className }: Props) {
  return (
    <Image
      className={`cus-conatiner mx-auto min-h-[236px] w-full object-cover ${className}`}
      src={Img}
      alt="img"
      priority
    />
  );
}

export default Banner;
