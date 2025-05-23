// BannerComponent.jsx
import Image from "next/image";
import React from "react";

const BannerComponent = ({ bannerData }: any) => {
  // Parse the JSON strings
  const banners = JSON.parse(bannerData?.three_banner);
  const texts = JSON.parse(bannerData?.three_banner_text);
  const links = JSON.parse(bannerData?.three_banner_link);

  return (
    <div className="three-banner-section">
      {[1, 2, 3].map((num) => (
        <div key={num} className="banner-item">
          <a href={links[`banner_${num}`]}>
            <Image
              src={`https://babystore.ae/storage/back/assets/homepage/${banners[`banner_${num}`]}`}
              alt={texts[`banner_${num}`] || "banner"}
            />
            <p>{texts[`banner_${num}`]}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default BannerComponent;
