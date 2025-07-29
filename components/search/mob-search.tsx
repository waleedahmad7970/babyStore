"use client";
import Image from "next/image";
import { mob_search_icon, X } from "@/public/assets/icons";
import {
  InstantSearch,
  Hits,
  useSearchBox,
  Highlight,
} from "react-instantsearch";
import { searchClient } from "@/config/config";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { globalStateActions } from "@/store/slices/globalStates";
import { useDispatch } from "react-redux";

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

const CustomSearchInput = ({ onFocus }: { onFocus: () => void }) => {
  const { query, refine } = useSearchBox();

  return (
    <input
      type="text"
      value={query}
      onFocus={onFocus}
      onChange={(e) => refine(e.target.value)}
      placeholder="Search"
      className="font-Inter w-full bg-[#F6F6F6] py-3 pl-4 text-[14px] font-normal text-[#33333399] outline-none"
    />
  );
};
const Hit = ({ hit }: any) => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        router.push(`/product/${hit?.id}`);
        dispatch(globalStateActions.setMobileMenu(false));
      }}
      className="flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-[#F3F3F3]"
    >
      <Image src={mob_search_icon} alt="search" className="h-[20px] w-[20px]" />
      <p className="text-[14px] text-black">
        <Highlight
          attribute="title"
          hit={hit}
          highlightedTagName="span"
          classNames={{
            highlighted: "text-[#F82D8B] font-semibold", // ✅ pink color
          }}
        />
      </p>
    </div>
  );
};

export const MobSearch: React.FC<MobSearchComponentProps> = ({
  closeButton,
}) => {
  const closeSearchbar = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  useClickOutside(closeSearchbar, () => {
    setIsFocused(false);
  });
  return (
    <div className="relative w-full">
      <InstantSearch
        searchClient={searchClient}
        indexName={process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_INDEX!}
      >
        <div className="flex items-center justify-between gap-[10px] border-t-1 border-b-1 border-[#F1F1F1] px-[5px] py-[10px]">
          <div className="flex w-full items-center justify-between gap-[10px] rounded-[10px] bg-[#F6F6F6]">
            <CustomSearchInput onFocus={() => setIsFocused(true)} />
            <div className="h-[21px] min-w-[21px] pr-4">
              <Image
                src={mob_search_icon}
                alt="search"
                className="h-full min-w-[21px] object-cover"
              />
            </div>
          </div>
          <div
            onClick={closeButton}
            className="flex min-w-[21px] items-center justify-center rounded-[10px] bg-[#F6F6F6] px-4 py-3"
          >
            <Image src={X} alt="close" className="h-full w-full min-w-[21px]" />
          </div>
        </div>

        {/* Dropdown: only show when focused */}
        {isFocused && (
          <div
            ref={closeSearchbar}
            className="absolute z-50 mt-1 max-h-[300px] w-full overflow-y-auto rounded-[8px] bg-white shadow-md"
          >
            <Hits hitComponent={Hit} />
          </div>
        )}
      </InstantSearch>
    </div>
  );
};
