"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { globalStateActions } from "@/store/slices/globalStates";
import { useDispatch } from "react-redux";

interface ExpandableCategoryItemProps {
  title: string;
  icon: string | StaticImageData;

  children?: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  parentId: number;
}

const ExpandableCategoryItem: React.FC<ExpandableCategoryItemProps> = ({
  title,
  icon,
  children = [],
  isOpen = false,
  onToggle,
  parentId,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleTitleClick = () => {
    router.push(`/sub-category/${parentId}`);
    dispatch(globalStateActions.setMobileMenu(false));
  };

  const handleChildClick = (id: number) => {
    router.push(`/sub-sub-category/${id}`);
    dispatch(globalStateActions.setMobileMenu(false));
  };

  return (
    <div className="w-full">
      <div className="flex w-full flex-col gap-[10px]">
        <div
          className={`flex items-center justify-between gap-3 transition-all duration-300 ${
            isOpen && React.Children.count(children) > 0
              ? "rounded-[8px] bg-[#F3F3F3] px-[10px]"
              : ""
          }`}
        >
          <Image
            src={icon}
            alt="item"
            width={40}
            height={40}
            className="max-h-[40px] w-full max-w-[40px] object-cover"
          />
          <div className="flex w-full items-center justify-between gap-3">
            <p
              onClick={handleTitleClick}
              className="font-Inter mb-0 cursor-pointer text-[12px] leading-[17px] font-normal text-[#434343]"
            >
              {title}
            </p>
            <p
              className={`font-Inter mb-0 min-w-[71px] cursor-pointer rounded-[20px] px-[10px] text-center text-[10px] leading-[29px] font-semibold text-[#434343] underline transition-all duration-300 ${
                isOpen && React.Children.count(children) > 0
                  ? "bg-[#FAFAFA]"
                  : "bg-[#F3F3F3]"
              }`}
              onClick={onToggle}
            >
              VIEW ALL
            </p>
          </div>
        </div>
      </div>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen && React.Children.count(children) > 0
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col items-end gap-[10px] pt-[10px]">
            {React.Children.map(children, (child: any) => (
              <div
                onClick={() => {
                  const id = child?.props?.["data-id"];
                  handleChildClick(id);
                }}
                className="flex w-full max-w-[281px] cursor-pointer items-center rounded-[8px] bg-[#F9F9F9] px-4 py-3 transition-all duration-300"
              >
                {child}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandableCategoryItem;
