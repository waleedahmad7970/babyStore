"use client";

import { angle_down, XBlack } from "@/public/assets/icons";
import Image from "next/image";
import { useState } from "react";

type FilterOption = {
  label: string;
  value: string;
  count?: number;
  children?: FilterOption[];
  children2?: FilterOption[];
};

type FilterSection = {
  title: string;
  showCount: boolean;
  options: FilterOption[];
};

const filters: FilterSection[] = [
  {
    title: "Filter By",
    showCount: false,
    options: [
      { label: "Free Delivery", value: "free_delivery" },
      { label: "Sale", value: "Sale" },
      {
        label: "Age",
        children: [
          { label: "18-24", value: "18-24" },
          { label: "24-34", value: "24-34" },
        ],
        value: "Age",
      },
      {
        label: "Color",
        children: [
          { label: "Light Red", value: "light_red" },
          { label: "Dark Red", value: "dark_red" },
        ],
        value: "Color",
      },
      {
        label: "Gender",
        children: [
          { label: "Male", value: "Male" },
          { label: "Female", value: "Female" },
        ],
        value: "Gender",
      },
      {
        label: "Type",
        children: [],
        value: "Type",
      },
      {
        label: "Size",
        children: [],
        value: "Size",
      },
    ],
  },
  {
    title: "Category",
    showCount: true,
    options: [
      {
        label: "Feeding",
        value: "Feeding",
        children: [
          {
            label: "Bottle Feeding",
            value: "Bottle Feeding",
            children2: [
              { label: "Bottles", count: 434, value: "Bottles" },
              {
                label: "Teats & Accessories",
                count: 43,
                value: "Teats & Accessories",
              },
              {
                label: "Warmers & Sterilizers",
                count: 4,
                value: "Warmers & Sterilizers",
              },
              {
                label: "Milk Powder Dispenser",
                count: 4,
                value: "Milk Powder Dispenser",
              },
              { label: "Bottle Cleaning", count: 4, value: "Bottle Cleaning" },
              { label: "Bottle Holders", count: 4, value: "Bottle Holders" },
              {
                label: "Pacifiers & Holders",
                count: 4,
                value: "Pacifiers & Holders",
              },
            ],
          },
          { label: "Dark Red", value: "dark_red" },
        ],
      },
      {
        label: "Baby Food",
        value: "Baby Food",
        children: [
          { label: "Light Red", value: "light_red" },
          { label: "Dark Red", value: "dark_red" },
        ],
      },
      {
        label: "Meal-Time Essentials",
        value: "Meal-Time Essentials",
        children: [
          { label: "Light Red", value: "light_red" },
          { label: "Dark Red", value: "dark_red" },
        ],
      },
      {
        label: "Nursing Care",
        value: "Nursing Care",
        children: [
          { label: "Light Red", value: "light_red" },
          { label: "Dark Red", value: "dark_red" },
        ],
      },
    ],
  },
  {
    title: "Brand",
    showCount: true,
    options: [],
  },
  {
    title: "Price",
    showCount: true,
    options: [],
  },
];

export default function FilterSidebar() {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});
  const [expandedOptions, setExpandedOptions] = useState<
    Record<string, boolean>
  >({});
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const toggleOptionExpand = (value: string) => {
    setExpandedOptions((prev) => ({ ...prev, [value]: !prev[value] }));
  };

  const toggleSelection = (value: string) => {
    setSelected((prev) => {
      const copy = new Set(prev);
      if (copy.has(value)) {
        copy.delete(value);
      } else {
        copy.add(value);
      }
      return copy;
    });
  };

  return (
    <aside className="w-full">
      <h1 className="mb-4 text-[24px] font-medium text-[#1F1F1F]">Feeding</h1>

      {selected.size > 0 ? (
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {[...selected].map((value) => (
              <div
                key={value}
                className="boder-1 mb-0 flex items-center gap-[10px] rounded-[50px] border border-[#2AA136] px-[18px] py-[12.4px] text-[12px] leading-[14px] font-medium text-[#1F1F1F]"
                style={{ boxShadow: "0px 3px 0px 0px #2AA136 inset" }}
              >
                {value}
                <button
                  onClick={() => toggleSelection(value)}
                  className="cursor-pointer text-[#999] hover:text-[#333]"
                >
                  <Image src={XBlack} alt="x" />
                </button>
              </div>
            ))}
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

      {filters.map((filter) => (
        <div key={filter.title}>
          {/* Section Title */}
          <div
            style={{ borderTop: "1px solid rgba(31, 31, 31, 0.40)" }}
            className="flex cursor-pointer items-center justify-between py-[9.5px]"
            onClick={() => toggleSection(filter.title)}
          >
            <h2 className="text-[14px] font-semibold text-[#1F1F1F]">
              {filter.title}
            </h2>
            <Image
              src={angle_down}
              alt="arrow"
              className={`transition-transform duration-200 ${
                expandedSections[filter.title] ? "rotate-180" : ""
              }`}
            />
          </div>

          {/*  animation */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              expandedSections[filter.title] ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            <div className="space-y-2">
              {filter.options.map((opt) => (
                <div key={opt.value}>
                  {/* Main option */}
                  <div
                    style={{
                      borderTop: "1px dashed rgba(115, 115, 115, 0.20)",
                    }}
                    className="flex cursor-pointer items-center justify-between pl-2"
                  >
                    <div
                      className="flex items-center gap-2 py-[9.5px]"
                      onClick={() => toggleSelection(opt.value)}
                    >
                      <div
                        className={`h-4 w-4 rounded-[3px] border border-[#1F1F1F33] ${
                          selected.has(opt.value) ? "bg-[#2AA136]" : "bg-white"
                        }`}
                      />
                      <span
                        className={`max-w-[100px] text-[12px] ${
                          filter.title === "Filter By"
                            ? "font-normal"
                            : "font-semibold"
                        } text-[#1F1F1F]`}
                      >
                        {opt.label}
                      </span>
                    </div>

                    {opt.children && (
                      <div className="flex items-center justify-between gap-1">
                        {filter.showCount && (
                          <p
                            style={{ color: "rgba(31, 31, 31, 0.40)" }}
                            className="mb-0 text-[12px] font-normal"
                          >
                            ({opt.children.length})
                          </p>
                        )}
                        <Image
                          src={angle_down}
                          alt="arrow"
                          className={`cursor-pointer transition-transform duration-200 ${
                            expandedOptions[opt.value] ? "rotate-180" : ""
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleOptionExpand(opt.value);
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Child  animation */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedOptions[opt.value] ? "max-h-[1000px]" : "max-h-0"
                    }`}
                  >
                    {opt.children?.map((child) => (
                      <div key={child.value}>
                        <div
                          style={{
                            borderTop: "1px dashed rgba(115, 115, 115, 0.20)",
                          }}
                          className="flex cursor-pointer items-center justify-between gap-2 py-[9.5px] pl-4"
                          onClick={() => toggleSelection(child.value)}
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className={`h-4 w-4 rounded-[3px] ${
                                selected.has(child.value)
                                  ? "border-none bg-[#2AA136]"
                                  : "border border-[#1F1F1F33] bg-white"
                              }`}
                            />
                            <span className="max-w-[100px] text-[12px] font-normal text-[#1F1F1F]">
                              {child.label}
                            </span>
                          </div>

                          {child.children2 && (
                            <div
                              className="ml-auto flex items-center justify-between gap-1"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleOptionExpand(child.value);
                              }}
                            >
                              {opt.children?.length && (
                                <p
                                  style={{ color: "rgba(31, 31, 31, 0.40)" }}
                                  className="mb-0 text-[12px] font-normal"
                                >
                                  ({opt.children.length})
                                </p>
                              )}
                              <Image
                                src={angle_down}
                                alt="arrow"
                                className={`cursor-pointer transition-transform duration-200 ${
                                  expandedOptions[child.value]
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </div>
                          )}
                        </div>

                        {/* children2 animation */}
                        <div
                          className={`space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${
                            expandedOptions[child.value]
                              ? "max-h-[1000px]"
                              : "max-h-0"
                          }`}
                        >
                          {child.children2?.map((grand) => (
                            <div
                              key={grand.value}
                              className="flex cursor-pointer items-center justify-between gap-2 py-[9.5px] pl-8"
                              style={{
                                borderTop:
                                  "1px dashed rgba(115, 115, 115, 0.20)",
                              }}
                              onClick={() => toggleSelection(grand.value)}
                            >
                              <div className="flex items-center justify-between gap-2">
                                <div
                                  className={`h-4 w-4 rounded-[3px] ${
                                    selected.has(grand.value)
                                      ? "border-none bg-[#2AA136]"
                                      : "border border-[#1F1F1F33] bg-white"
                                  }`}
                                />
                                <span className="max-w-[100px] text-[12px] font-normal text-[#1F1F1F]">
                                  {grand.label}
                                </span>
                              </div>

                              {grand.count && (
                                <p
                                  className="mb-0 pr-[13px] text-[12px] font-normal"
                                  style={{ color: "rgba(31, 31, 31, 0.40)" }}
                                >
                                  ({grand.count})
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
          </div>
        </div>
      ))}
    </aside>
  );
}
