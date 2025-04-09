import {
  brand_mob_1,
  brand_mob_2,
  brand_mob_3,
  brand_mob_4,
} from "@/public/assets/brands";
import Image from "next/image";

interface BrandProps {
  name: string;
  logo: string;
  link?: string;
}

const mobBrands = [brand_mob_1, brand_mob_2, brand_mob_3, brand_mob_4];
export const TopBrands: React.FC<{ brands?: BrandProps[] }> = ({ brands }) => {
  return (
    <div className="flex w-full items-center justify-start gap-3 px-[5px]">
      <p className="font-Inter mb-0 text-[12px] leading-[17px] font-normal text-[#434343]">
        TOP BRANDS
      </p>{" "}
      <div className="relative flex flex-wrap justify-start gap-0">
        {mobBrands.map((brand, idx) => (
          <Image
            key={idx}
            src={brand}
            alt={"brand"}
            className="relative h-[50px] w-[50px] object-contain"
          />
        ))}
      </div>
    </div>
  );
};
