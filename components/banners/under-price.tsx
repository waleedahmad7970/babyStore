import Image from "next/image";

interface Props {
  data: {
    banner: string;
    underPrice: string[];
  };
}

function UnderPricerBanner({ data }: Props) {
  return (
    <div className="cus-container flex flex-col justify-start gap-[10px] md:gap-[30px]">
      <Image
        src={data.banner}
        alt="toy"
        className="h-[236px] w-full object-cover md:h-auto"
        width={1200}
        height={400}
      />

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
