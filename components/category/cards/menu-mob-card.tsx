import Image from "next/image";
import React from "react";

interface MenuMobCategoryItemProps {
  title: string;
  image: string;
  onClick?: () => void;
}

export const MenuMobCategoryItem: React.FC<MenuMobCategoryItemProps> = ({
  title,
  image,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl p-3 hover:bg-gray-100"
    >
      <div className="relative h-20 w-20">
        <Image
          src={image}
          alt={title}
          layout="fill"
          className="object-contain"
        />
      </div>
      <p className="text-center text-sm font-medium text-gray-800">{title}</p>
    </div>
  );
};
