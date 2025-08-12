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
        <img src="assets/homepage/school/backtoScholl.jpg" alt="Banner" class="cus-container h-full w-full object-cover">
      </div>
      <div class="cus-container relative block w-full rounded-[8px] sm:hidden">
        <img src="assets/homepage/school/backtoschoolmob.jpg" alt="Mobile Banner" class="h-full w-full object-cover">
      </div>
      <div class="cus-container mb-5 flex flex-wrap justify-center md:mb-0 md:justify-between gap-[10px] md:gap-[21px]">
      <img src="assets/homepage/school/s1 (1).jpg" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[379px] object-cover">
      <img src="assets/homepage/school/s1 (2).jpg" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[379px] object-cover">
        <img src="assets/homepage/school/s1 (3).jpg" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[379px] object-cover">
        <img src="assets/homepage/school/s1 (4).png" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[379px] object-cover">
      </div>
    </div>
    <div id="section-1"></div>
    <!-- travel section -->
    
    <div class="relative mb-10 flex flex-col items-center gap-[10px] pb-5 text-center md:mb-0 md:gap-[30px] md:pb-[60px]">
      <div class="relative hidden aspect-[1148/199] max-h-[436px] w-full rounded-[8px] sm:block">
        <img src="assets/homepage/travel/tarvelbanner.jpg" alt="Banner" class="cus-container h-full w-full object-cover">
      </div>
      <div class="cus-container relative block w-full rounded-[8px] sm:hidden">
        <img src="assets/homepage/travel/travelmobile.jpg" alt="Mobile Banner" class="h-full w-full object-cover">
      </div>
      <div class="cus-container mb-5 flex flex-wrap justify-center md:mb-0 md:justify-between gap-[10px] md:gap-[21px]">
      <img src="assets/homepage/travel/t1 (1).jpg" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[379px] object-cover">
      <img src="assets/homepage/travel/t1 (2).jpg" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[379px] object-cover">
        <img src="assets/homepage/travel/t1 (3).jpg" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[379px] object-cover">
        <img src="assets/homepage/travel/t1 (4).jpg" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[379px] object-cover">
      </div>
    </div>
    <div id="section-2"></div>

    <!-- summer section -->
      <div class="relative mb-10 flex flex-col items-center gap-[10px] pb-5 text-center md:mb-0 md:gap-[30px] md:pb-[60px]">
      <div class="relative hidden aspect-[1148/199] max-h-[436px] w-full rounded-[8px] sm:block">
        <img src="assets/homepage/summar/summarbanner.jpg" alt="Banner" class="cus-container h-full w-full object-cover">
      </div>
      <div class="cus-container relative block w-full rounded-[8px] sm:hidden">
        <img src="assets/homepage/summar/summarmobile.jpg" alt="Mobile Banner" class="h-full w-full object-cover">
      </div>
      <div class="cus-container mb-5 flex flex-wrap justify-center md:mb-0 md:justify-between gap-[10px] md:gap-[14px]">
      <img src="assets/homepage/summar/s1 (1).jpg" alt="Product" class="w-[48%] h-[225px] lg:w-[215px] lg:h-[252px] object-cover">
      <img src="assets/homepage/summar/s1 (2).jpg" alt="Product" class="w-[48%] h-[225px] lg:w-[215px] lg:h-[252px] object-cover">
        <img src="assets/homepage/summar/s1 (7).jpg" alt="Product" class="w-[48%] h-[225px] lg:w-[215px] lg:h-[252px] object-cover">
        <img src="assets/homepage/summar/s1 (4).jpg" alt="Product" class="w-[48%] h-[225px] lg:w-[215px] lg:h-[252px] object-cover">
        <img src="assets/homepage/summar/s1 (5).jpg" alt="Product" class="w-[48%] h-[225px] lg:w-[215px] lg:h-[252px] object-cover">
        <img src="assets/homepage/summar/s1 (6).jpg" alt="Product" class="w-[48%] h-[225px] lg:w-[215px] lg:h-[252px] object-cover">
      </div>
    </div>
    <div id="section-3"></div>

    <!-- banner section -->

          <div className="mb-10 w-full py-0 sm:mb-0 md:pb-[60px]">
          <div class="cus-container relative overflow-hidden rounded-[8px]">
          <div class="relative hidden aspect-[1148/436] max-h-[436px] w-full overflow-hidden rounded-[8px] sm:block">
          <img src="assets/homepage/mummy/mummybanner.jpg" alt="Banner" class="h-full w-full object-cover">
          </div>

          <div class="relative block aspect-[640/236] min-h-[236px] w-full overflow-hidden rounded-[8px] sm:hidden">
          <img src="assets/homepage/mummy/mummymobile.jpg" alt="Mobile Banner" class="h-full w-full object-cover">
          </div>
          </div>
          </div>


          <div id="section-4"></div>
    <!-- summer section -->
      <div class="relative mb-10 flex flex-col items-center gap-[10px] pb-5 text-center md:mb-0 md:gap-[30px] md:pb-[60px]">
      <div class="relative hidden aspect-[1148/199] max-h-[436px] w-full rounded-[8px] sm:block">
        <img src="assets/homepage/clearance/clerancebanner.jpg" alt="Banner" class="cus-container h-full w-full object-cover">
      </div>
      <div class="cus-container relative block w-full rounded-[8px] sm:hidden">
        <img src="assets/homepage/clearance/clearancemobile.jpg" alt="Mobile Banner" class="h-full w-full object-cover">
      </div>
      <div class="cus-container mb-5 flex flex-wrap justify-center md:mb-0 md:justify-between gap-[10px] md:gap-[21px]">
      <img src="assets/homepage/clearance/c1 (1).jpg" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[421px] object-cover">
      <img src="assets/homepage/clearance/c1 (2).jpg" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[421px] object-cover">
        <img src="assets/homepage/clearance/c1 (3).jpg" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[421px] object-cover">
        <img src="assets/homepage/clearance/c1 (4).jpg" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[421px] object-cover">
      </div>
    </div>
    
<div id="section-5"></div>
    <!-- firstday section -->
    <div class="relative mb-10 flex flex-col items-center gap-[10px] pb-5 text-center md:mb-0 md:gap-[30px] md:pb-[60px]">
      <div class="relative hidden aspect-[1148/199] max-h-[436px] w-full rounded-[8px] sm:block">
        <img src="assets/homepage/firstday/firstdaybanner.jpg" alt="Banner" class="cus-container h-full w-full object-cover">
      </div>
      <div class="cus-container relative block w-full rounded-[8px] sm:hidden">
        <img src="assets/homepage/firstday/firstdaymobile.jpg" alt="Mobile Banner" class="h-full w-full object-cover">
      </div>
      <div class="cus-container mb-5 flex flex-wrap justify-center md:mb-0 md:justify-between gap-[10px] md:gap-[21px]">
      <img src="assets/homepage/firstday/fd1 (1).jpg" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[379px] object-cover">
      <img src="assets/homepage/firstday/fd1 (2).jpg" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[379px] object-cover">
        <img src="assets/homepage/firstday/fd1 (5).jpg" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[379px] object-cover">
        <img src="assets/homepage/firstday/fd1 (4).jpg" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[379px] object-cover">
      </div>
    </div>

    <!-- diaper section -->
    <div class=" relative mb-10 flex flex-col items-center gap-[10px] pb-5 text-center md:mb-0 md:gap-[30px] md:pb-[60px]">
      <div class="relative hidden aspect-[1148/199] max-h-[436px] w-full rounded-[8px] sm:block">
        <img src="assets/homepage/moms/momsbanner.jpg" alt="Banner" class="cus-container h-full w-full object-cover">
      </div>
      <div class="cus-container relative block w-full rounded-[8px] sm:hidden">
        <img src="assets/homepage/moms/momsmobile.jpg" alt="Mobile Banner" class="h-full w-full object-cover">
      </div>
      <div class="cus-container mb-5 flex flex-wrap justify-center md:mb-0 md:justify-between gap-[10px] md:gap-[21px]">
      <img src="assets/homepage/moms/moms (1).jpg" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[379px] object-cover">
      <img src="assets/homepage/moms/moms (2).jpg" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[379px] object-cover">
        <img src="assets/homepage/moms/moms (3).jpg" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[379px] object-cover">
        <img src="assets/homepage/moms/moms (4).jpg" alt="Product" class="w-[48%] h-auto lg:w-[324px] lg:h-[379px] object-cover">
      </div>
    </div>

    <!-- Pricing section -->
    <div class="cus-container relative mb-5 flex flex-col items-center gap-5 pb-5 text-center sm:mb-0 md:pb-[60px]">
  <div class="relative hidden aspect-[1148/199] max-h-[436px] w-full rounded-[8px] sm:block">
    <img src="assets/homepage/toys/toysbanner.jpg" alt="Banner" class="h-full w-full object-cover">
  </div>
  
  <div class="relative block w-full rounded-[8px] sm:hidden">
    <img src="assets/homepage/toys/toysmobile.jpg" alt="Mobile Banner" class="h-full w-full object-cover">
  </div>
  
  <div class="flex w-full flex-col justify-between gap-[10px] md:flex-row md:gap-6">
    <div class="w-full">
      <img src="assets/homepage/toys/toys (7).jpg" alt="under price 1" class="h-auto w-full md:max-w-[431px]">
    </div>
    <div class="w-full">
      <img src="assets/homepage/toys/toys (8).jpg" alt="under price 2" class="h-auto w-full md:max-w-[431px]">
    </div>
     <div class="w-full">
      <img src="assets/homepage/toys/toys (9).jpg" alt="under price 2" class="h-auto w-full md:max-w-[431px]">
    </div>
  </div>
  
  <div class="cus-container flex w-full justify-between gap-0 rounded-[8px]">
    <div class="w-full max-w-[680px] md:w-1/2">
      <img src="assets/homepage/toys/toys (4).png" alt="banner-1" class="w-full object-cover md:rounded-md lg:h-[425px]">
    </div>
    <div class="w-full max-w-[680px] md:w-1/2">
      <img src="assets/homepage/toys/toys (5).png" alt="banner-2" class="w-full object-cover md:rounded-md lg:h-[425px]">
    </div>
  </div>

  <div class="cus-container flex flex-wrap justify-center gap-[10px] md:justify-between md:gap-[5px]">
    <img src="assets/homepage/toys/toys (1).jpg" alt="product-1" class="w-[48%] h-auto lg:w-[215px] lg:h-[252px] object-cover">
    <img src="assets/homepage/toys/toys (2).jpg" alt="product-2" class="w-[48%] h-auto lg:w-[215px] lg:h-[252px] object-cover">
    <img src="assets/homepage/toys/toys (3).jpg" alt="product-3" class="w-[48%] h-auto lg:w-[215px] lg:h-[252px] object-cover">
    <img src="assets/homepage/toys/toys (4).jpg" alt="product-3" class="w-[48%] h-auto lg:w-[215px] lg:h-[252px] object-cover">
    <img src="assets/homepage/toys/toys (5).jpg" alt="product-3" class="w-[48%] h-auto lg:w-[215px] lg:h-[252px] object-cover">
    <img src="assets/homepage/toys/toys (6).png" alt="product-3" class="w-[48%] h-auto lg:w-[215px] lg:h-[252px] object-cover">
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
      // cleanupFunctions.push(() => {
      //   requestIdleCallback(() => {
      //     root.unmount();
      //     sliderContainer.remove();
      //     delete sectionElement.dataset.rendered;
      //   });
      // });
      cleanupFunctions.push(() => {
        (window.requestIdleCallback ?? ((cb) => setTimeout(cb, 1)))(() => {
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
