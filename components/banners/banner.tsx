import Image from "next/image";

interface Props {
  Img: string;
  mobImg?: string;
  className?: string;
}

function Banner({ Img, mobImg, className = "" }: Props) {
  return (
    <div className={`cus-container relative ${className}`}>
      {/* Desktop/Laptop Banner */}
      <div className="relative hidden aspect-[1148/436] max-h-[436px] w-full sm:block">
        <Image src={Img} alt="Banner" className="h-full w-full object-cover" />
      </div>

      {/* Mobile Banner */}
      {mobImg && (
        <div className="relative block aspect-[640/236] min-h-[236px] w-full sm:hidden">
          <Image
            src={mobImg}
            alt="Mobile Banner"
            className="h-full w-full object-cover"
          />
        </div>
      )}
    </div>
  );
}

export default Banner;
