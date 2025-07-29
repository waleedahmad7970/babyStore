"use client";
import React, { useEffect, useRef, useState } from "react";
import { useAppSelector } from "@/store/hooks";
import ProductSwiperSlider from "../slider/product.swiper";
import http from "@/utils/https";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "@/store/store";

interface SectionData {
  id: string;
  sectionKey: string;
  products: any[];
  element: HTMLElement;
  fetched?: any;
}

interface ApiResponse {
  data?: {
    data?: any[]; // Replace 'any' with your actual type
  };
}

const HomePage = () => {
  const [htmlContent, setHtmlContent] = useState(`
    <!-- school section -->
    <div class="relative mb-10 flex flex-col items-center gap-[10px] pb-5 text-center md:mb-0 md:gap-[30px] md:pb-[60px]">
      <div class="relative hidden aspect-[1148/199] max-h-[436px] w-full rounded-[8px] sm:block">
        <img src="https://i.postimg.cc/ydG66xNV/school-banner.png" alt="Banner" class="cus-container h-full w-full object-cover">
      </div>
      <div class="cus-container relative block w-full rounded-[8px] sm:hidden">
        <img src="https://i.postimg.cc/SxLvmPKR/school-banner-mob.png" alt="Mobile Banner" class="h-full w-full object-cover">
      </div>
      <div class="cus-container mb-5 flex flex-wrap justify-center md:mb-0 md:justify-between gap-[10px] md:gap-[21px]">
        <img src="https://i.postimg.cc/MZR4sX81/school-bag.png" alt="Product" class="w-[162px] h-[201px] lg:w-[324px] lg:h-[379px] object-cover">
        <img src="https://i.postimg.cc/90rfhTtX/water-bottle.png" alt="Product" class="w-[162px] h-[201px] lg:w-[324px] lg:h-[379px] object-cover">
        <img src="https://i.postimg.cc/8CxG63hG/stationary.png" alt="Product" class="w-[162px] h-[201px] lg:w-[324px] lg:h-[379px] object-cover">
        <img src="https://i.postimg.cc/15yQwDN8/lunch-box.png" alt="Product" class="w-[162px] h-[201px] lg:w-[324px] lg:h-[379px] object-cover">
      </div>
    </div>
    <div id="section-1"></div>
    <!-- travel section -->
    
    <div class="relative mb-10 flex flex-col items-center gap-[10px] pb-5 text-center md:mb-0 md:gap-[30px] md:pb-[60px]">
      <div class="relative hidden aspect-[1148/199] max-h-[436px] w-full rounded-[8px] sm:block">
        <img src="https://i.postimg.cc/zB9CbnDv/travel-banner.png" alt="Banner" class="cus-container h-full w-full object-cover">
      </div>
      <div class="cus-container relative block w-full rounded-[8px] sm:hidden">
        <img src="https://i.postimg.cc/fb1tBDGg/travel-banner-mob.png" alt="Mobile Banner" class="h-full w-full object-cover">
      </div>
      <div class="cus-container mb-5 flex flex-wrap justify-center md:mb-0 md:justify-between gap-[10px] md:gap-[21px]">
        <img src="https://i.postimg.cc/bwDqLkqp/reversible.png" alt="Product" class="w-[162px] h-[201px] lg:w-[324px] lg:h-[379px] object-cover">
        <img src="https://i.postimg.cc/FHLQ0vxK/booster.png" alt="Product" class="w-[162px] h-[201px] lg:w-[324px] lg:h-[379px] object-cover">
        <img src="https://i.postimg.cc/m2cxG4JS/iso.png" alt="Product" class="w-[162px] h-[201px] lg:w-[324px] lg:h-[379px] object-cover">
        <img src="https://i.postimg.cc/65SX7qnS/ages.png" alt="Product" class="w-[162px] h-[201px] lg:w-[324px] lg:h-[379px] object-cover">
      </div>
    </div>
    <div id="section-2"></div>

    <!-- summer section -->
      <div class="relative mb-10 flex flex-col items-center gap-[10px] pb-5 text-center md:mb-0 md:gap-[30px] md:pb-[60px]">
      <div class="relative hidden aspect-[1148/199] max-h-[436px] w-full rounded-[8px] sm:block">
        <img src="https://i.postimg.cc/T16cNrzS/summer-banner.png" alt="Banner" class="cus-container h-full w-full object-cover">
      </div>
      <div class="cus-container relative block w-full rounded-[8px] sm:hidden">
        <img src="https://i.postimg.cc/CLK8hPs7/summer-banner-mob.png" alt="Mobile Banner" class="h-full w-full object-cover">
      </div>
      <div class="cus-container mb-5 flex flex-wrap justify-center md:mb-0 md:justify-between gap-[10px] md:gap-[14px]">
      <img src="https://i.postimg.cc/8CLJKqTp/pools.png" alt="Product" class="w-[162px] h-[225px] lg:w-[215px] lg:h-[252px] object-cover">
      <img src="https://i.postimg.cc/g2VmfdLT/inflatables.png" alt="Product" class="w-[162px] h-[225px] lg:w-[215px] lg:h-[252px] object-cover">
        <img src="https://i.postimg.cc/c1FKb7Gn/beach-toys.png" alt="Product" class="w-[162px] h-[225px] lg:w-[215px] lg:h-[252px] object-cover">
        <img src="https://i.postimg.cc/ZRTRfnfH/swimwear.png" alt="Product" class="w-[162px] h-[225px] lg:w-[215px] lg:h-[252px] object-cover">
        <img src="https://i.postimg.cc/13r4DDBX/pool-shoes.png" alt="Product" class="w-[162px] h-[225px] lg:w-[215px] lg:h-[252px] object-cover">
        <img src="https://i.postimg.cc/25YhDzcb/sun-protector.png" alt="Product" class="w-[162px] h-[225px] lg:w-[215px] lg:h-[252px] object-cover">
      </div>
    </div>
    <div id="section-3"></div>

    <!-- banner section -->

          <div className="mb-10 w-full py-0 sm:mb-0 md:pb-[60px]">
          <div class="cus-container relative overflow-hidden rounded-[8px]">
          <div class="relative hidden aspect-[1148/436] max-h-[436px] w-full overflow-hidden rounded-[8px] sm:block">
          <img src="https://i.postimg.cc/Znqp9Vpr/mummy-banner.png" alt="Banner" class="h-full w-full object-cover">
          </div>

          <div class="relative block aspect-[640/236] min-h-[236px] w-full overflow-hidden rounded-[8px] sm:hidden">
          <img src="https://i.postimg.cc/gjBR38H1/mummy-banner-mob.png" alt="Mobile Banner" class="h-full w-full object-cover">
          </div>
          </div>
          </div>


          <div id="section-4"></div>
    <!-- summer section -->
      <div class="relative mb-10 flex flex-col items-center gap-[10px] pb-5 text-center md:mb-0 md:gap-[30px] md:pb-[60px]">
      <div class="relative hidden aspect-[1148/199] max-h-[436px] w-full rounded-[8px] sm:block">
        <img src="https://i.postimg.cc/fbq1VT3y/clearance-banner.png" alt="Banner" class="cus-container h-full w-full object-cover">
      </div>
      <div class="cus-container relative block w-full rounded-[8px] sm:hidden">
        <img src="https://i.postimg.cc/t4XcDVW7/clearance-banner-mob.png" alt="Mobile Banner" class="h-full w-full object-cover">
      </div>
      <div class="cus-container mb-5 flex flex-wrap justify-center md:mb-0 md:justify-between gap-[10px] md:gap-[21px]">
      <img src="https://i.postimg.cc/rp7Q6d01/toys.png" alt="Product" class="w-[162px] h-[225px] lg:w-[324px] lg:h-[421px] object-cover">
      <img src="https://i.postimg.cc/c4Thxkt4/gear2.png" alt="Product" class="w-[162px] h-[225px] lg:w-[324px] lg:h-[421px] object-cover">
        <img src="https://i.postimg.cc/jSFhNWhp/feeding2.png" alt="Product" class="w-[162px] h-[225px] lg:w-[324px] lg:h-[421px] object-cover">
        <img src="https://i.postimg.cc/4yP63ndF/outdoor.png" alt="Product" class="w-[162px] h-[225px] lg:w-[324px] lg:h-[421px] object-cover">
      </div>
    </div>
    
<div id="section-5"></div>
    <!-- firstday section -->
    <div class="relative mb-10 flex flex-col items-center gap-[10px] pb-5 text-center md:mb-0 md:gap-[30px] md:pb-[60px]">
      <div class="relative hidden aspect-[1148/199] max-h-[436px] w-full rounded-[8px] sm:block">
        <img src="https://i.postimg.cc/kXdS0QjM/first-day-banner.png" alt="Banner" class="cus-container h-full w-full object-cover">
      </div>
      <div class="cus-container relative block w-full rounded-[8px] sm:hidden">
        <img src="https://i.postimg.cc/j50NRysh/firstday-banner-mob.png" alt="Mobile Banner" class="h-full w-full object-cover">
      </div>
      <div class="cus-container mb-5 flex flex-wrap justify-center md:mb-0 md:justify-between gap-[10px] md:gap-[21px]">
        <img src="https://i.postimg.cc/nrTQK5qd/school-bag-2.png" alt="Product" class="w-[162px] h-[201px] lg:w-[324px] lg:h-[379px] object-cover">
        <img src="https://i.postimg.cc/0Q06x3X8/lunch-box-2.png" alt="Product" class="w-[162px] h-[201px] lg:w-[324px] lg:h-[379px] object-cover">
        <img src="https://i.postimg.cc/hvwKq1nD/water-botle-2.png" alt="Product" class="w-[162px] h-[201px] lg:w-[324px] lg:h-[379px] object-cover">
        <img src="https://i.postimg.cc/QMbsM3Dn/stationary-2.png" alt="Product" class="w-[162px] h-[201px] lg:w-[324px] lg:h-[379px] object-cover">
      </div>
    </div>

    <!-- diaper section -->
    <div class=" relative mb-10 flex flex-col items-center gap-[10px] pb-5 text-center md:mb-0 md:gap-[30px] md:pb-[60px]">
      <div class="relative hidden aspect-[1148/199] max-h-[436px] w-full rounded-[8px] sm:block">
        <img src="https://i.postimg.cc/1X928n9k/baby-care-banner.png" alt="Banner" class="cus-container h-full w-full object-cover">
      </div>
      <div class="cus-container relative block w-full rounded-[8px] sm:hidden">
        <img src="https://i.postimg.cc/RhVpMkd9/diapers-banner-mob.png" alt="Mobile Banner" class="h-full w-full object-cover">
      </div>
      <div class="cus-container mb-5 flex flex-wrap justify-center md:mb-0 md:justify-between gap-[10px] md:gap-[21px]">
        <img src="https://i.postimg.cc/JzJxW78Z/diapers.png" alt="Product" class="w-[162px] h-[201px] lg:w-[324px] lg:h-[379px] object-cover">
        <img src="https://i.postimg.cc/SKk6FWDb/wipes.png" alt="Product" class="w-[162px] h-[201px] lg:w-[324px] lg:h-[379px] object-cover">
        <img src="https://i.postimg.cc/QC2765HP/formula.png" alt="Product" class="w-[162px] h-[201px] lg:w-[324px] lg:h-[379px] object-cover">
        <img src="https://i.postimg.cc/xTmMXsZS/skin-care.png" alt="Product" class="w-[162px] h-[201px] lg:w-[324px] lg:h-[379px] object-cover">
      </div>
    </div>

    <!-- Pricing section -->
    <div class="cus-container relative mb-5 flex flex-col items-center gap-5 pb-5 text-center sm:mb-0 md:pb-[60px]">
  <div class="relative hidden aspect-[1148/199] max-h-[436px] w-full rounded-[8px] sm:block">
    <img src="https://i.postimg.cc/KjRC2Kmx/toy-banner.png" alt="Banner" class="h-full w-full object-cover">
  </div>
  
  <div class="relative block w-full rounded-[8px] sm:hidden">
    <img src="https://i.postimg.cc/NFXF0j4v/toys-banner-mob.png" alt="Mobile Banner" class="h-full w-full object-cover">
  </div>
  
  <div class="flex w-full flex-col justify-between gap-[10px] md:flex-row md:gap-6">
    <div class="w-full">
      <img src="https://i.postimg.cc/d1bQgKKH/aed50.png" alt="under price 1" class="h-auto w-full md:max-w-[431px]">
    </div>
    <div class="w-full">
      <img src="https://i.postimg.cc/XvXVJvj1/aed100.png" alt="under price 2" class="h-auto w-full md:max-w-[431px]">
    </div>
     <div class="w-full">
      <img src="https://i.postimg.cc/rwZkvL11/aed200.png" alt="under price 2" class="h-auto w-full md:max-w-[431px]">
    </div>
  </div>
  
  <div class="cus-container flex w-full justify-between gap-0 rounded-[8px]">
    <div class="w-full max-w-[680px] md:w-1/2">
      <img src="https://i.postimg.cc/FsnCvF6H/boys-banners.png" alt="banner-1" class="w-full object-cover md:rounded-md lg:h-[425px]">
    </div>
    <div class="w-full max-w-[680px] md:w-1/2">
      <img src="https://i.postimg.cc/d11TJFpJ/girls-banner.png" alt="banner-2" class="w-full object-cover md:rounded-md lg:h-[425px]">
    </div>
  </div>

  <div class="cus-container flex flex-wrap justify-center gap-[10px] md:justify-between md:gap-[5px]">
    <img src="https://i.postimg.cc/FFS0zr1K/activity.png" alt="product-1" class="w-[162px] h-[201px] lg:w-[215px] lg:h-[252px] object-cover">
    <img src="https://i.postimg.cc/ZKF3Pw8t/kitchen.png" alt="product-2" class="w-[162px] h-[201px] lg:w-[215px] lg:h-[252px] object-cover">
    <img src="https://i.postimg.cc/FHHfyNF3/rc-toys.png" alt="product-3" class="w-[162px] h-[201px] lg:w-[215px] lg:h-[252px] object-cover">
    <img src="https://i.postimg.cc/cJKrzhnJ/blocks.png" alt="product-3" class="w-[162px] h-[201px] lg:w-[215px] lg:h-[252px] object-cover">
    <img src="https://i.postimg.cc/dt43tpR1/doll-house.png" alt="product-3" class="w-[162px] h-[201px] lg:w-[215px] lg:h-[252px] object-cover">
    <img src="https://i.postimg.cc/2yTkyLZJ/stem-toys.png" alt="product-3" class="w-[162px] h-[201px] lg:w-[215px] lg:h-[252px] object-cover">
  </div>
</div>
  `);
  const containerRef = useRef<HTMLDivElement>(null);
  const [sections, setSections] = useState<SectionData[]>([]);
  const { desktopSectionsTest = [] } = useAppSelector((state) => state.product);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (
      !containerRef.current ||
      !desktopSectionsTest.length ||
      initializedRef.current
    )
      return;

    initializedRef.current = true;

    const sectionElements = Array.from(
      containerRef.current.querySelectorAll<HTMLElement>("[id^='section-']"),
    );

    // Prepare section data with a flag to track fetched status
    const initialSections = sectionElements.map((el) => ({
      id: el.id,
      sectionKey: el.id.split("-")[1],
      products: [],
      element: el,
      fetched: false, // Add this flag
    }));

    setSections(initialSections);
  }, [desktopSectionsTest]);

  // 2. Fetch products for each section
  useEffect(() => {
    if (sections.length === 0) return;

    const fetchProducts = async () => {
      const updatedSections = await Promise.all(
        sections.map(async (section) => {
          // Skip if already fetched
          if (section?.fetched) return section;

          try {
            const [response] = await http.get(
              `https://www.babystore.ae/api/get_section_${section.sectionKey}`,
            );
            return {
              ...section,
              products:
                (response && response?.data && response?.data?.data) || [],
              fetched: true,
            };
          } catch (err) {
            console.error(`Failed to load products for ${section.id}`, err);
            return {
              ...section,
              products: [],
              fetched: true, // Mark as fetched even if failed
            };
          }
        }),
      );

      // Only update if there are actual changes
      if (JSON.stringify(updatedSections) !== JSON.stringify(sections)) {
        setSections(updatedSections);
      }
    };

    fetchProducts();
  }, [sections]); // Keep the dependency as is

  // 3. Render product sliders
  useEffect(() => {
    if (!sections.length) return;

    const cleanupFunctions: (() => void)[] = [];

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section.id);
      if (!sectionElement || section.products.length === 0) return;

      // Skip if already rendered
      if (sectionElement.dataset.rendered === "true") return;
      sectionElement.dataset.rendered = "true";

      const sliderContainer = document.createElement("div");
      sliderContainer.className = "product-slider-container my-8";
      sectionElement.appendChild(sliderContainer);
      const root = createRoot(sliderContainer);
      root.render(
        <Provider store={store}>
          <ProductSwiperSlider products={section.products} />
        </Provider>,
      );
      cleanupFunctions.push(() => {
        requestIdleCallback(() => {
          root.unmount();
          sliderContainer.remove();
          delete sectionElement.dataset.rendered;
        });
      });
    });

    return () => cleanupFunctions.forEach((fn) => fn());
  }, [sections]);
  return (
    <div ref={containerRef} className="relative">
      <div
        dangerouslySetInnerHTML={{
          // __html: (desktopSectionsTest as any)[0]?.first_homepage_block || "",
          __html: htmlContent,
        }}
      />
    </div>
  );
};

export default HomePage;
