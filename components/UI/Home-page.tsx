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

const HomePage = () => {
  const [htmlContent] = useState(`
    <!-- school section -->
    <div class="relative mb-10 flex flex-col items-center gap-[10px] pb-5 text-center md:mb-0 md:gap-[30px] md:pb-[60px]">
      <div class="relative hidden aspect-[1148/199] max-h-[436px] w-full rounded-[8px] sm:block">
        <img src="https://i.postimg.cc/7LgmXZ5G/1440x400px-1.png" alt="Banner" class="cus-container h-full w-full object-cover">
      </div>
      <div class="cus-container relative block w-full rounded-[8px] sm:hidden">
        <img src="https://i.postimg.cc/kG50kbSh/1440x400px-1.png" alt="Mobile Banner" class="h-full w-full object-cover">
      </div>
      <div class="cus-container mb-5 flex flex-wrap justify-center md:mb-0 md:justify-between gap-[10px] md:gap-[21px]">
        <img src="https://i.postimg.cc/YCNdzSG4/image.png" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[379px] object-cover">
        <img src="https://i.postimg.cc/nhd0PP2Z/image.png" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[379px] object-cover">
        <img src="https://i.postimg.cc/RFtdqVBV/600x750px-3.png" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[379px] object-cover">
        <img src="https://i.postimg.cc/yxYDtvv4/600x750px-4.png" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[379px] object-cover">
      </div>
    </div>
    <div id="section-1"></div>
    <!-- travel section -->
    
    <div class="relative mb-10 flex flex-col items-center gap-[10px] pb-5 text-center md:mb-0 md:gap-[30px] md:pb-[60px]">
      <div class="relative hidden aspect-[1148/199] max-h-[436px] w-full rounded-[8px] sm:block">
        <img src="https://i.postimg.cc/QCsz3WTr/image.png" alt="Banner" class="cus-container h-full w-full object-cover">
      </div>
      <div class="cus-container relative block w-full rounded-[8px] sm:hidden">
        <img src="https://i.postimg.cc/hGtVQLkG/image.png" alt="Mobile Banner" class="h-full w-full object-cover">
      </div>
      <div class="cus-container mb-5 flex flex-wrap justify-center md:mb-0 md:justify-between gap-[10px] md:gap-[21px]">
        <img src="https://i.postimg.cc/J431Zbqj/image.png" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[379px] object-cover">
        <img src="https://i.postimg.cc/DfjHS6RS/image.png" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[379px] object-cover">
        <img src="https://i.postimg.cc/xd2Fw4N4/image.png" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[379px] object-cover">
        <img src="https://i.postimg.cc/qMtBmjKK/image.png" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[379px] object-cover">
      </div>
    </div>
    <div id="section-2"></div>

    <!-- summer section -->
      <div class="relative mb-10 flex flex-col items-center gap-[10px] pb-5 text-center md:mb-0 md:gap-[30px] md:pb-[60px]">
      <div class="relative hidden aspect-[1148/199] max-h-[436px] w-full rounded-[8px] sm:block">
        <img src="https://i.postimg.cc/P5sHShTG/image.png" alt="Banner" class="cus-container h-full w-full object-cover">
      </div>
      <div class="cus-container relative block w-full rounded-[8px] sm:hidden">
        <img src="https://i.postimg.cc/FFw1XMNp/image.png" alt="Mobile Banner" class="h-full w-full object-cover">
      </div>
      <div class="cus-container mb-5 flex flex-wrap justify-center md:mb-0 md:justify-between gap-[10px] md:gap-[14px]">
      <img src="https://i.postimg.cc/Y05MJLL7/image.png" alt="Product" class="w-[48%] h-[225px] lg:w-[215px] lg:h-[252px] object-cover">
      <img src="https://i.postimg.cc/Y9VHWL3F/image.png" alt="Product" class="w-[48%] h-[225px] lg:w-[215px] lg:h-[252px] object-cover">
        <img src="https://i.postimg.cc/Jhz03JbY/image.png" alt="Product" class="w-[48%] h-[225px] lg:w-[215px] lg:h-[252px] object-cover">
        <img src="https://i.postimg.cc/PqY34pTZ/image.png" alt="Product" class="w-[48%] h-[225px] lg:w-[215px] lg:h-[252px] object-cover">
        <img src="https://i.postimg.cc/tJCBpBPt/image.png" alt="Product" class="w-[48%] h-[225px] lg:w-[215px] lg:h-[252px] object-cover">
        <img src="https://i.postimg.cc/QMQm72JJ/image.png" alt="Product" class="w-[48%] h-[225px] lg:w-[215px] lg:h-[252px] object-cover">
      </div>
    </div>
    <div id="section-3"></div>

    <!-- banner section -->

          <div className="mb-10 w-full py-0 sm:mb-0 md:pb-[60px]">
          <div class="cus-container relative overflow-hidden rounded-[8px]">
          <div class="relative hidden aspect-[1148/436] max-h-[436px] w-full overflow-hidden rounded-[8px] sm:block">
          <img src="https://i.postimg.cc/tRS5FtWw/image.png" alt="Banner" class="h-full w-full object-cover">
          </div>

          <div class="relative block aspect-[640/236] min-h-[236px] w-full overflow-hidden rounded-[8px] sm:hidden">
          <img src="https://i.postimg.cc/1zr0XpyW/image.png" alt="Mobile Banner" class="h-full w-full object-cover">
          </div>
          </div>
          </div>


          <div id="section-4"></div>
    <!-- summer section -->
      <div class="relative mb-10 flex flex-col items-center gap-[10px] pb-5 text-center md:mb-0 md:gap-[30px] md:pb-[60px]">
      <div class="relative hidden aspect-[1148/199] max-h-[436px] w-full rounded-[8px] sm:block">
        <img src="https://i.postimg.cc/Nj1mC12g/image.png" alt="Banner" class="cus-container h-full w-full object-cover">
      </div>
      <div class="cus-container relative block w-full rounded-[8px] sm:hidden">
        <img src="https://i.postimg.cc/wBwtnFqd/image.png" alt="Mobile Banner" class="h-full w-full object-cover">
      </div>
      <div class="cus-container mb-5 flex flex-wrap justify-center md:mb-0 md:justify-between gap-[10px] md:gap-[21px]">
      <img src="https://i.postimg.cc/h46y7WkN/image.png" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[421px] object-cover">
      <img src="https://i.postimg.cc/xCWvqYXR/image.png" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[421px] object-cover">
        <img src="https://i.postimg.cc/gc8R4CwC/image.png" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[421px] object-cover">
        <img src="https://i.postimg.cc/4dtKLc36/image.png" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[421px] object-cover">
      </div>
    </div>
    
<div id="section-5"></div>
    <!-- firstday section -->
    <div class="relative mb-10 flex flex-col items-center gap-[10px] pb-5 text-center md:mb-0 md:gap-[30px] md:pb-[60px]">
      <div class="relative hidden aspect-[1148/199] max-h-[436px] w-full rounded-[8px] sm:block">
        <img src="https://i.postimg.cc/FzLpNpx7/image.png" alt="Banner" class="cus-container h-full w-full object-cover">
      </div>
      <div class="cus-container relative block w-full rounded-[8px] sm:hidden">
        <img src="https://i.postimg.cc/VNZWtpGJ/image.png" alt="Mobile Banner" class="h-full w-full object-cover">
      </div>
      <div class="cus-container mb-5 flex flex-wrap justify-center md:mb-0 md:justify-between gap-[10px] md:gap-[21px]">
        <img src="https://i.postimg.cc/26B9SCkk/image.png" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[379px] object-cover">
        <img src="https://i.postimg.cc/BQ37JWd3/image.png" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[379px] object-cover">
        <img src="https://i.postimg.cc/2ykWXxXs/image.png" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[379px] object-cover">
        <img src="https://i.postimg.cc/Yq402VgX/image.png" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[379px] object-cover">
      </div>
    </div>

    <!-- diaper section -->
    <div class=" relative mb-10 flex flex-col items-center gap-[10px] pb-5 text-center md:mb-0 md:gap-[30px] md:pb-[60px]">
      <div class="relative hidden aspect-[1148/199] max-h-[436px] w-full rounded-[8px] sm:block">
        <img src="https://i.postimg.cc/fTb2V7Tq/image.png" alt="Banner" class="cus-container h-full w-full object-cover">
      </div>
      <div class="cus-container relative block w-full rounded-[8px] sm:hidden">
        <img src="https://i.postimg.cc/6QCzkYYq/image.png" alt="Mobile Banner" class="h-full w-full object-cover">
      </div>
      <div class="cus-container mb-5 flex flex-wrap justify-center md:mb-0 md:justify-between gap-[10px] md:gap-[21px]">
        <img src="https://i.postimg.cc/hG8byht7/image.png" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[379px] object-cover">
        <img src="https://i.postimg.cc/7h5zkLw9/image.png" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[379px] object-cover">
        <img src="https://i.postimg.cc/W1gMztrf/image.png" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[379px] object-cover">
        <img src="https://i.postimg.cc/44jPxDqy/image.png" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[379px] object-cover">
      </div>
    </div>

    <!-- Pricing section -->
    <div class="cus-container relative mb-5 flex flex-col items-center gap-5 pb-5 text-center sm:mb-0 md:pb-[60px]">
  <div class="relative hidden aspect-[1148/199] max-h-[436px] w-full rounded-[8px] sm:block">
    <img src="https://i.postimg.cc/8PBvgxVq/image.png" alt="Banner" class="h-full w-full object-cover">
  </div>
  
  <div class="relative block w-full rounded-[8px] sm:hidden">
    <img src="https://i.postimg.cc/8CsfW5rS/image.png" alt="Mobile Banner" class="h-full w-full object-cover">
  </div>
  
  <div class="flex w-full flex-col justify-between gap-[10px] md:flex-row md:gap-6">
    <div class="w-full">
      <img src="https://i.postimg.cc/MGjKqjQv/image.png" alt="under price 1" class="h-auto w-full md:max-w-[431px]">
    </div>
    <div class="w-full">
      <img src="https://i.postimg.cc/ZnjJV81D/image.png" alt="under price 2" class="h-auto w-full md:max-w-[431px]">
    </div>
     <div class="w-full">
      <img src="https://i.postimg.cc/nrdtvHDy/image.png" alt="under price 2" class="h-auto w-full md:max-w-[431px]">
    </div>
  </div>
  
  <div class="cus-container flex w-full justify-between gap-0 rounded-[8px]">
    <div class="w-full max-w-[680px] md:w-1/2">
      <img src="https://i.postimg.cc/ZR7fH0wx/image.png" alt="banner-1" class="w-full object-cover md:rounded-md lg:h-[425px]">
    </div>
    <div class="w-full max-w-[680px] md:w-1/2">
      <img src="https://i.postimg.cc/qvsjY1mR/image.png" alt="banner-2" class="w-full object-cover md:rounded-md lg:h-[425px]">
    </div>
  </div>

  <div class="cus-container flex flex-wrap justify-center gap-[10px] md:justify-between md:gap-[5px]">
    <img src="https://i.postimg.cc/DzYjd8jd/image.png" alt="product-1" class="w-[48%] h-auto lg:w-[215px] lg:h-[252px] object-cover">
    <img src="https://i.postimg.cc/DyBqbRY1/image.png" alt="product-2" class="w-[48%] h-auto lg:w-[215px] lg:h-[252px] object-cover">
    <img src="https://i.postimg.cc/3wDpVNrZ/image.png" alt="product-3" class="w-[48%] h-auto lg:w-[215px] lg:h-[252px] object-cover">
    <img src="https://i.postimg.cc/G3jDZZR6/image.png" alt="product-3" class="w-[48%] h-auto lg:w-[215px] lg:h-[252px] object-cover">
    <img src="https://i.postimg.cc/T3B5Vxj5/image.png" alt="product-3" class="w-[48%] h-auto lg:w-[215px] lg:h-[252px] object-cover">
    <img src="https://i.postimg.cc/cJXyqxDr/image.png" alt="product-3" class="w-[48%] h-auto lg:w-[215px] lg:h-[252px] object-cover">
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
          <ProductSwiperSlider products={section?.products} />
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
