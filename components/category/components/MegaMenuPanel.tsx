import Image from "next/image";
import { menuBrands, menuImages } from "../category-list";
import {
  clothingSections,
  diaperingSections,
  foodingSections,
  maternitySections,
  nursingSections,
  outdoorSections,
  partySections,
  schoolEssentialsSections,
  sections2,
  skincareSections,
  toySections,
} from "@/static/static";
import { useRouter } from "next/navigation";

type SectionType = {
  title: string;
  items: string[];
};
interface MenuItem {
  id: number;
  title: string;
  image: string;
  items: {
    id: number | null;
    name: string;
    image: string | null;
  }[];
}

interface MenuConfigItem {
  data: MenuItem[];
  columns?: number;
  itemsPerCol?: number;
  showImages?: boolean;
  showBrands?: boolean;
}

const menuConfig: Record<number, MenuConfigItem> = {
  0: {
    data: foodingSections,
    columns: 3,
    itemsPerCol: 2,
    showImages: true,
    showBrands: true,
  },
  1: { data: skincareSections, columns: 3, itemsPerCol: 1 },
  2: { data: nursingSections, columns: 3, itemsPerCol: 2 },
  3: { data: diaperingSections, columns: 4, itemsPerCol: 2 },
  4: { data: sections2, columns: 3, itemsPerCol: 3 },
  5: { data: toySections, columns: 3, itemsPerCol: 2 },
  6: { data: outdoorSections, columns: 4, itemsPerCol: 2 },
  7: { data: schoolEssentialsSections, columns: 5, itemsPerCol: 2 },
  8: { data: maternitySections, columns: 5, itemsPerCol: 2 },
  9: { data: [], columns: 3, itemsPerCol: 2 },
  10: { data: partySections, columns: 3, itemsPerCol: 2 },
  11: { data: clothingSections, columns: 3, itemsPerCol: 2 },
};
export const MegaMenuPanel = ({ hoveredId }: { hoveredId: number }) => {
  const router = useRouter();
  const config = menuConfig[hoveredId] as any;
  if (!config) return null;

  const { data, columns, itemsPerCol, showImages, showBrands } = config;

  return (
    <div className="flex w-full flex-col justify-between gap-[33px] lg:flex-row">
      <div className={`grid grid-cols-${columns} gap-[36.88px]`}>
        {Array.from({ length: columns }, (_, colIndex) => (
          <div
            key={colIndex}
            className="flex w-full max-w-[232.81px] flex-col gap-6"
          >
            {data
              .slice(
                colIndex * itemsPerCol,
                colIndex * itemsPerCol + itemsPerCol,
              )
              .map((section: any, i: number) => (
                <div key={i} className="w-[232px] max-w-[232px]">
                  <h2
                    onClick={() => router.push(`/sub-category/${section?.id}`)}
                    className="mb-[13px] max-w-[831.3px] cursor-pointer text-[15px] leading-[24px] font-medium text-[#1F1F1F] hover:text-[#F82D8B99]"
                  >
                    {section.title}
                  </h2>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {section.items.map((item: any, idx: number) => (
                      <li
                        onClick={() =>
                          router.push(`/sub-sub-category/${item?.id}`)
                        }
                        key={idx}
                        className="mb-0 cursor-pointer border-b border-[#F5F5F5] text-[12px] leading-[24px] text-[#1F1F1F] transition-all duration-200 hover:translate-x-3 hover:text-[#F82D8B99]"
                      >
                        {item?.name || item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        ))}
      </div>

      {(showImages || showBrands) && (
        <div className="flex w-full justify-between gap-[26.51px] lg:max-w-[483px]">
          {showImages && (
            <div className="flex flex-col gap-[12.35px]">
              {menuImages.map((menu, index) => (
                <Image src={menu} alt="menu" key={index} />
              ))}
            </div>
          )}
          {showBrands && (
            <div className="flex flex-col gap-0">
              <p className="mb-0 text-[14px] leading-[24px] font-bold text-[#1F1F1F]">
                TOP BRANDS
              </p>
              {menuBrands.map((brand, index) => (
                <Image src={brand} alt="brand" key={index} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
