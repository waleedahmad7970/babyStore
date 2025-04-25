import { toys_banner_mob } from "@/public/assets/banner";
import Image, { StaticImageData } from "next/image";

interface Props {
  data: {
    banner: string | StaticImageData;
    underPrice: string[] | StaticImageData[];
  };
}

function UnderPricerBanner({ data }: Props) {
  return (
    <div className="cus-container flex flex-col justify-start gap-[10px] md:gap-[30px]">
      {/* <Image
        src={data.banner}
        alt="toy"
        className="h-[236px] w-full object-cover md:h-auto"
        width={1200}
        height={400}
      /> */}
      <div className="relative hidden aspect-[1148/199] max-h-[436px] w-full rounded-[8px] sm:block">
        <Image
          src={data.banner}
          alt="Banner"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative block w-full rounded-[8px] sm:hidden">
        <Image
          src={toys_banner_mob}
          alt="Mobile Banner"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex w-full flex-col justify-between gap-[10px] md:flex-row md:gap-6">
        {data.underPrice.map((price, index) => (
          <div key={index} className="w-full">
            <Image
              className="h-auto w-full md:max-w-[431px]"
              src={price}
              alt={`under price ${index}`}
              width={300}
              height={300}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UnderPricerBanner;
