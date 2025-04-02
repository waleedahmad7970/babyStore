import React from "react";
import { categories } from "../../static/static";
import CategoryCard from "./cards/category-card";

interface Category {
  name: string;
  image: string;
}

export default function CategoryList() {
  return (
    <div className="mb-0 hidden w-full px-4 md:block md:px-0 md:pb-6">
      <div className="cus-container no-scrollbar mx-auto flex justify-between gap-3 overflow-x-auto">
        {categories.map((category: Category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </div>
  );
}
