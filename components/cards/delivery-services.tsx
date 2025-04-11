import Image from "next/image";

interface DeliveryServiceCardProps {
  icon: string;
  title: string;
}

export default function DeliveryServiceCard({
  icon,
  title,
}: DeliveryServiceCardProps) {
  return (
    <div className="flex h-[98px] w-[98px] flex-col items-center justify-center space-y-2">
      <Image
        src={icon}
        alt={title}
        className="h-10 w-10"
        width={40}
        height={40}
      />
      <p className="text-dark text-[9.29px] leading-[11.24px] font-medium text-[#1F1F1F] md:text-[12.29px] md:leading-[14.87px]">
        {title}
      </p>
    </div>
  );
}
