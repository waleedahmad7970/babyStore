"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";
import ProductCard from "../cards/product-card";
import { specialItems4 } from "@/public/assets/support";

// Define types
interface Product {
  id: number;
  image: any; // Use more specific type if available, e.g., StaticImageData
  title: string;
  price: number;
  rating: number;
}

interface ProductsByCategory {
  [key: string]: Product[];
}

// Type-safe tabs
const tabs = ["Baby", "Boys", "Girls", "Toys"] as const;
type Tab = (typeof tabs)[number];

const products: ProductsByCategory = {
  Baby: [
    {
      id: 1,
      image: specialItems4,
      title: "Polka Dot Chambray Shirt",
      price: 60,
      rating: 5,
    },
    {
      id: 2,
      image: specialItems4,
      title: "Red Striped Polka Dress",
      price: 80,
      rating: 5,
    },
    {
      id: 3,
      image: specialItems4,
      title: "Red Plaid Flannel Shirt",
      price: 80,
      rating: 5,
    },
    {
      id: 4,
      image: specialItems4,
      title: "Polka Dot Girl Dress",
      price: 40,
      rating: 5,
    },
    {
      id: 5,
      image: specialItems4,
      title: "Polka Dot Chambray Shirt",
      price: 60,
      rating: 5,
    },
    {
      id: 6,
      image: specialItems4,
      title: "Red Striped Polka Dress",
      price: 80,
      rating: 5,
    },
    {
      id: 7,
      image: specialItems4,
      title: "Red Plaid Flannel Shirt",
      price: 80,
      rating: 5,
    },
    {
      id: 8,
      image: specialItems4,
      title: "Polka Dot Girl Dress",
      price: 40,
      rating: 5,
    },
  ],
  Boys: [
    {
      id: 1,
      image: specialItems4,
      title: "Striped Cotton Shirt",
      price: 55,
      rating: 5,
    },
  ],
  Girls: [
    {
      id: 1,
      image: specialItems4,
      title: "Polka Dot Chambray Shirt",
      price: 60,
      rating: 5,
    },
    {
      id: 2,
      image: specialItems4,
      title: "Red Striped Polka Dress",
      price: 80,
      rating: 5,
    },
    {
      id: 3,
      image: specialItems4,
      title: "Red Plaid Flannel Shirt",
      price: 80,
      rating: 5,
    },
    {
      id: 4,
      image: specialItems4,
      title: "Polka Dot Girl Dress",
      price: 40,
      rating: 5,
    },
  ],
  Toys: [],
};

const BestChoiceProductsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Baby");

  return (
    <section className="bg-white py-16">
      <div className="cus-container">
        {/* Section Header */}
        <div className="mb-10 flex flex-col items-center justify-between md:flex-row">
          <h2 className="text-[28px] font-medium text-gray-900">
            Best Choice Products
          </h2>

          {/* Tabs */}
          <div className="flex gap-6 text-lg font-medium">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-1 transition-all duration-300 ${
                  activeTab === tab
                    ? "font-semibold text-[#E7448A] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#E7448A]"
                    : "text-gray-500 hover:text-[#E7448A]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {products[activeTab]?.length > 0 ? (
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
            {products[activeTab].map((item) => (
              <ProductCard
                key={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
                onAddToCart={() => console.log(`Added ${item.title} to cart`)}
                onWishlist={() => console.log(`Wishlisted ${item.title}`)}
                onView={() => console.log(`Viewing ${item.title}`)}
              />
            ))}
          </div>
        ) : (
          <div className="py-10 text-center text-lg text-gray-500">
            No products available in this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default BestChoiceProductsSection;
