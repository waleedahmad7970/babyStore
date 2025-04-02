import React from "react";
import {
  slider_left_arrow,
  slider_right_arrow,
} from "../../public/assets/icons";
import Image from "next/image";

interface SliderHeadingProps {
  title?: string;
  onPrev: () => void;
  onNext: () => void;
}

const SliderHeading: React.FC<SliderHeadingProps> = ({
  title = "You may also like",
  onPrev,
  onNext,
}) => {
  return (
    <div className="cus-container mx-auto mb-4 flex items-center justify-between">
      <h2 className="font-inter text-[20px] font-semibold text-[#1F1F1F] md:text-[32px] md:leading-[30px]">
        {title}
      </h2>
      <div className="flex items-center justify-between gap-10">
        <div className="flex gap-2">
          <button
            onClick={onPrev}
            className="flex items-center justify-center rounded-full bg-[#F470AB] p-[5px] transition-all duration-300 hover:scale-110 hover:bg-[#e05699] active:scale-90 md:p-[10px]"
          >
            <Image
              src={slider_left_arrow}
              className="h-[14px] w-[14px] md:h-[24px] md:w-[24px]"
              alt="Previous"
            />
          </button>
          <button
            onClick={onNext}
            className="flex items-center justify-center rounded-full bg-[#F470AB] p-[5px] transition-all duration-300 hover:scale-110 hover:bg-[#e05699] active:scale-90 md:p-[10px]"
          >
            <Image
              src={slider_right_arrow}
              className="h-[14px] w-[14px] md:h-[24px] md:w-[24px]"
              alt="Next"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderHeading;
