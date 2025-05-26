// components/types.ts

import { StaticImageData } from "next/image";

// home slider type
export interface Slide {
  id: number;
  alt: string;
  link?: string;
  image: string | StaticImageData;
  mobile_image: string | StaticImageData;
  mobileImg?: string | StaticImageData;
  desktopImg?: string | StaticImageData;
}

export interface Product {
  id: number;
  name?: string;
  image: StaticImageData | string;
  price: number;
  oldPrice: number;
  discount: string;
  rating: number;
  title: string | undefined;
  reviews?: any;
}
