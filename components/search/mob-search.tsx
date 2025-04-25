"use client";
import { mob_search_icon, X } from "@/public/assets/icons";
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import { useEffect } from "react";

interface mobSearchProps {
  name: string;
  logo: string;
  link?: string;
  closeButton: any;
}
interface MobSearchComponentProps {
  mobSearch?: mobSearchProps[];
  closeButton: any;
}
export const MobSearch: React.FC<MobSearchComponentProps> = ({
  closeButton,
}) => {
  const { isMobMenu } = useAppSelector((state) => state.globalStates);

  // useEffect(() => {
  //   if (isMobMenu) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "";
  //   }
  //   return () => {
  //     document.body.style.overflow = "";
  //   };
  // }, [isMobMenu]);

  return (
    <div className="flex items-center justify-between gap-[10px] border-t-1 border-b-1 border-[#F1F1F1] px-[5px] py-[10px]">
      <div className="flex w-full items-center justify-between gap-[10px] rounded-[10px] bg-[#F6F6F6]">
        <input
          style={{
            color: "rgba(51, 51, 51, 0.60)",
          }}
          className="font-Inter w-full py-3 pl-4 text-[14px] font-normal outline-none"
          placeholder="Search"
        />
        <div className="h-[21px] min-w-[21px] pr-4">
          <Image
            src={mob_search_icon}
            alt="searcg"
            className="h-full min-w-[21px] object-cover"
          />
        </div>
      </div>
      <div
        onClick={closeButton}
        className="flex min-w-[21px] items-center justify-center rounded-[10px] bg-[#F6F6F6] px-4 py-3"
      >
        <Image src={X} alt="searcg" className="h-full w-full min-w-[21px]" />
      </div>
    </div>
  );
};
