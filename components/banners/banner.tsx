import Image, { StaticImageData } from "next/image";

interface Props {
  Img: StaticImageData | string; // Accepts both imported images and string paths
  mobImg?: StaticImageData | string;
  className?: string;
}

function Banner({ Img, mobImg, className = "" }: Props) {
  return (
    <div
      className={`cus-container relative overflow-hidden rounded-[8px] ${className}`}
    >
      {/* Desktop/Laptop Banner */}
      <div className="relative hidden aspect-[1148/436] max-h-[436px] w-full overflow-hidden rounded-[8px] sm:block">
        <Image src={Img} alt="Banner" className="h-full w-full object-cover" />
      </div>

      {/* Mobile Banner */}
      {mobImg && (
        <div className="relative block aspect-[640/236] min-h-[236px] w-full overflow-hidden rounded-[8px] sm:hidden">
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
