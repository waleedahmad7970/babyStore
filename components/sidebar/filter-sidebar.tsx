"use client";

import Image from "next/image";
import Button from "../button/button";
import { angle_down, close } from "@/public/assets/icons";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { brandAction } from "@/store/slices/brand.slice";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import InputField from "../fields/input-field";
import { useFormik } from "formik";
import { validationSchemas } from "@/utils/validation";

type FilterOption = {
  label: string;
  title: string;
  value: string;
  count?: number;
  children?: FilterOption[];
  children2?: FilterOption[];
  isPriceFilter?: boolean;
};

type FilterSection = {
  title: string;
  showCount: boolean;
  options: FilterOption[];
  isPriceFilter?: any;
};

interface FilterSidebarProps {
  selected: string[];
  setSelected: Dispatch<SetStateAction<string[]>>;
}

export default function FilterSidebar() {
  const dispatch = useAppDispatch();
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});
  const [expandedOptions, setExpandedOptions] = useState<string[]>([]);

  const {
    priceRange = {},
    CBSPageProducts = [],
    CBSPageFilters = [],
    selectedFilters = [],
    selectTopFilterValue = "",
  } = useAppSelector((state) => state.brands);

  const filteredProducts = useMemo(() => {
    const filtered = CBSPageProducts?.filter((product: any) => {
      const attributeArray = product?.attribute_array || {};
      const selectedValues = Array.from(selectedFilters);

      // ✅ 1) Attribute filter
      const matchesFilters =
        selectedValues.length === 0 ||
        selectedValues.every((value) =>
          Object.values(attributeArray).includes(value),
        );
      if (!matchesFilters) return false;

      // ✅ 2) Top filter — only if it’s NOT a price sort option
      if (
        selectTopFilterValue?.value &&
        !["lowToHigh", "highToLow"].includes(selectTopFilterValue.value)
      ) {
        const selectedKey = selectTopFilterValue.value;
        if (!product[selectedKey]) return false;
      }

      // ✅ 3) Price range filter
      const price = parseFloat(product?.price);
      const lowestRaw = priceRange?.lowestPrice;
      const highestRaw = priceRange?.highestPrice;

      const hasLowest = !!lowestRaw && Number(lowestRaw) > 0;
      const hasHighest = !!highestRaw && Number(highestRaw) > 0;

      if (hasLowest || hasHighest) {
        if (!isFinite(price)) return false;
        const lowest = hasLowest ? Number(lowestRaw) : -Infinity;
        const highest = hasHighest ? Number(highestRaw) : Infinity;
        if (price < lowest || price > highest) return false;
      }

      return true;
    });

    // ✅ 4) Sort by price IF the selectedTopFilterValue is a sort option
    const sorted = [...filtered];
    if (selectTopFilterValue?.value === "lowToHigh") {
      sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (selectTopFilterValue?.value === "highToLow") {
      sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }

    return sorted;
  }, [CBSPageProducts, selectedFilters, priceRange, selectTopFilterValue]);

  useEffect(() => {
    dispatch(brandAction.setCBSFilteredProducts(filteredProducts));
  }, [dispatch, filteredProducts]);

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const toggleOptionExpand = (value: string) => {
    setExpandedOptions((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  const toggleSelection = (value: any) => {
    dispatch(brandAction.toggleSelectedFilter(value));

    // setSelected((prev) =>
    //   prev.includes(value)
    //     ? prev.filter((item) => item !== value)
    //     : [...prev, value],
    // );
  };

  const onSubmit = (values: any) => {
    dispatch(
      brandAction.setPriceRange({
        lowestPrice: values.lowest !== "" ? Number(values.lowest) : null,
        highestPrice: values.highest !== "" ? Number(values.highest) : null,
      }),
    );
  };

  const formikProps = useFormik({
    validateOnBlur: false,
    initialValues: {
      lowest: priceRange.lowest || "",
      highest: priceRange.highest || "",
    },
    validationSchema: validationSchemas.priceRange(20, 100),
    onSubmit: onSubmit,
  });

  const { values, handleChange, handleSubmit, errors } = formikProps;

  return (
    <aside className="w-full">
      <h1 className="mb-4 text-[24px] font-medium text-[#1F1F1F]">Feeding</h1>

      {selectedFilters?.length > 0 || selectTopFilterValue ? (
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {selectedFilters?.map((value) => (
              <div
                key={value}
                className="mb-0 flex items-center gap-[15px] rounded-[48px] bg-[#FFF0F5] px-[11px] py-[6px] text-[12px] leading-[14px] font-medium text-[#1F1F1F]"
              >
                {value}
                <button
                  onClick={() => toggleSelection(value)}
                  className="cursor-pointer text-[#999] hover:text-[#333]"
                >
                  <Image src={close} alt="x" className="h-[24px] w-[24px]" />
                </button>
              </div>
            ))}
            {selectTopFilterValue && (
              <div className="mb-0 flex items-center gap-[15px] rounded-[48px] bg-[#FFF0F5] px-[11px] py-[6px] text-[12px] leading-[14px] font-medium text-[#1F1F1F]">
                {selectTopFilterValue?.name}
                <button
                  onClick={() => dispatch(brandAction.unSelectTopFilterValue())}
                  className="cursor-pointer text-[#999] hover:text-[#333]"
                >
                  <Image src={close} alt="x" className="h-[24px] w-[24px]" />
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <h2
          style={{ color: "rgba(31, 31, 31, 0.50)" }}
          className="flex min-h-[128px] items-center justify-center text-center text-[14px] font-semibold capitalize"
        >
          Please Select Tags or tags For Better Searching
        </h2>
      )}

      {CBSPageFilters?.map((filter: FilterSection) => (
        <div key={filter?.title}>
          <div
            style={{ borderTop: "1px solid rgba(31, 31, 31, 0.40)" }}
            className="flex cursor-pointer items-center justify-between py-[9.5px]"
            onClick={() => toggleSection(filter?.title)}
          >
            <h2 className="text-[14px] font-semibold text-[#1F1F1F]">
              {filter?.title}
            </h2>
            <Image
              src={angle_down}
              alt="arrow"
              className={`transition-transform duration-200 ${
                expandedSections[filter?.title] ? "rotate-180" : ""
              }`}
            />
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              expandedSections[filter?.title]
                ? "max-h-max overscroll-y-auto"
                : "max-h-0"
            }`}
          >
            {!filter?.isPriceFilter ? (
              <div className="space-y-2">
                {filter?.options?.map((opt: FilterOption) => (
                  <div key={opt?.value}>
                    <div
                      style={{
                        borderTop: "1px dashed rgba(115, 115, 115, 0.20)",
                      }}
                      onClick={() => toggleOptionExpand(opt?.value)}
                      className="flex cursor-pointer items-center justify-between pl-2"
                    >
                      <div
                        className="flex items-center gap-2 py-[9.5px]"
                        onClick={() => toggleSelection(opt?.value)}
                      >
                        <div
                          className={`h-4 w-4 rounded-[3px] border ${
                            selectedFilters?.includes(opt.value)
                              ? "border-transparent bg-[#F470AB]"
                              : "border-[#1F1F1F33] bg-white"
                          } `}
                        />

                        <span
                          className={`max-w-[120px] text-[12px] ${
                            filter?.title === "Filter By"
                              ? "font-normal"
                              : "font-semibold"
                          } text-[#1F1F1F]`}
                        >
                          {opt?.label}
                        </span>
                      </div>

                      {opt?.children && (
                        <div className="flex items-center justify-between gap-1">
                          {filter?.showCount && (
                            <p
                              style={{ color: "rgba(31, 31, 31, 0.40)" }}
                              className="mb-0 text-[12px] font-normal"
                            >
                              ({opt?.children?.length})
                            </p>
                          )}
                          <Image
                            src={angle_down}
                            alt="arrow"
                            className={`cursor-pointer transition-transform duration-200 ${
                              expandedOptions.includes(opt?.value)
                                ? "rotate-180"
                                : ""
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              // toggleOptionExpand(opt?.value);
                            }}
                          />
                        </div>
                      )}
                    </div>

                    {/* Child Options */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        expandedOptions.includes(opt?.value)
                          ? "max-h-max"
                          : "max-h-0"
                      }`}
                    >
                      {opt?.children?.map((child: FilterOption) => (
                        <div key={child?.value}>
                          <div
                            style={{
                              borderTop: "1px dashed rgba(115, 115, 115, 0.20)",
                            }}
                            className="flex cursor-pointer items-center justify-between gap-2 py-[9.5px] pl-4"
                            onClick={() => toggleSelection(child?.value)}
                          >
                            <div className="flex items-center gap-2">
                              <div
                                className={`h-4 w-4 rounded-[3px] ${
                                  selectedFilters?.includes(child?.value)
                                    ? "border-none bg-[#F470AB]"
                                    : "border border-[#1F1F1F33] bg-white"
                                }`}
                              />
                              <span className="max-w-[120px] text-[12px] font-normal text-[#1F1F1F]">
                                {child?.label}
                              </span>
                            </div>

                            {child?.children2 && (
                              <div
                                className="ml-auto flex items-center justify-between gap-1"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleOptionExpand(child?.value);
                                }}
                              >
                                {child?.children2.length && (
                                  <p
                                    style={{ color: "rgba(31, 31, 31, 0.40)" }}
                                    className="mb-0 text-[12px] font-normal"
                                  >
                                    ({child?.children2.length})
                                  </p>
                                )}
                                <Image
                                  src={angle_down}
                                  alt="arrow"
                                  className={`cursor-pointer transition-transform duration-200 ${
                                    expandedOptions.includes(child?.value)
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              </div>
                            )}
                          </div>

                          {/* Grandchild */}
                          <div
                            className={`space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${
                              expandedOptions?.includes(child?.value)
                                ? "max-h-max"
                                : "max-h-0"
                            }`}
                          >
                            {child?.children2?.map((grand: FilterOption) => (
                              <div
                                key={grand?.value}
                                className="flex cursor-pointer items-center justify-between gap-2 py-[9.5px] pl-8"
                                style={{
                                  borderTop:
                                    "1px dashed rgba(115, 115, 115, 0.20)",
                                }}
                                onClick={() => toggleSelection(grand?.value)}
                              >
                                <div className="flex items-center justify-between gap-2">
                                  <div
                                    className={`h-4 w-4 rounded-[3px] ${
                                      selectedFilters?.includes(grand?.value)
                                        ? "border-none bg-[#F470AB]"
                                        : "border border-[#1F1F1F33] bg-white"
                                    }`}
                                  />
                                  <span className="max-w-[120px] text-[12px] font-normal text-[#1F1F1F]">
                                    {grand?.label}
                                  </span>
                                </div>

                                {grand?.count && (
                                  <p
                                    className="mb-0 pr-[13px] text-[12px] font-normal"
                                    style={{ color: "rgba(31, 31, 31, 0.40)" }}
                                  >
                                    ({grand?.count})
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col items-center justify-between gap-2">
                  <div>
                    <div className="text-[13px] font-semibold text-[#E7448C]">
                      Enter lowest price{" "}
                    </div>
                    <InputField
                      type="number"
                      name="lowest"
                      value={values.lowest}
                      onChange={handleChange("lowest")}
                      placeholder="Lowest Price"
                      className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
                    />
                    {errors.lowest && (
                      <div className="text-red-500">
                        {errors.highest as string}
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-[#E7448C]">
                      Enter highest price{" "}
                    </div>
                    <InputField
                      type="number"
                      name="highest"
                      value={values.highest}
                      onChange={handleChange("highest")}
                      placeholder="Hightest Price"
                      className="mb-2 w-full rounded-[8px] border border-[#F1F1F5] bg-[#FDFDFD] px-4 py-3 text-[14px] leading-[24px] text-[#ADADAD] outline-none"
                    />
                    {errors.highest && (
                      <div className="text-[11px] text-red-500">
                        {errors.highest as string}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex w-full items-center justify-end gap-2">
                  <Button
                    handler={() => onSubmit}
                    text={"Apply"}
                    type="submit"
                    className="w-full rounded-[8px] bg-[#FD71AF] px-3 py-1 text-[14px] leading-[25px] font-normal text-[#fff] underline md:px-6 md:py-2 md:text-[18px]"
                  />
                  <Button
                    text={"Reset"}
                    className="w-full rounded-[8px] bg-[#61B582] px-3 py-1 text-[14px] leading-[25px] font-normal text-[#fff] md:px-6 md:py-2 md:text-[18px]"
                  />
                </div>
              </form>
            )}
          </div>
        </div>
      ))}
    </aside>
  );
}
