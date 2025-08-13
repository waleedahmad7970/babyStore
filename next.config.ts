// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     domains: ["cdn.dummyjson.com", "www.babystore.ae", "babystore.ae"],
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.babystore.ae",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "babystore.ae",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
