// HomePage.jsx
import React from "react";
import Image from "next/image";
import BannerComponent from "./banner-compoent";
import HtmlContentComponent from "./html-content-render";

const HomePage = ({ pageData }: { pageData: any }) => {
  return (
    <div className="home-page">
      {/* Three Banner Section */}
      {pageData?.three_banner_status === 1 && (
        <BannerComponent bannerData={pageData} />
      )}

      {/* First Homepage Block */}
      <HtmlContentComponent htmlContent={pageData?.first_homepage_block} />

      {/* Second Homepage Block */}
      <HtmlContentComponent htmlContent={pageData?.second_homepage_block} />

      {/* Below Popular Section */}
      <div className="desktop-section">
        <HtmlContentComponent htmlContent={pageData?.below_popular} />
      </div>
      <div className="mobile-section">
        <HtmlContentComponent htmlContent={pageData?.below_popular_mobile} />
      </div>

      {/* Mobile Homepage Block */}
      <div className="mobile-section">
        <HtmlContentComponent htmlContent={pageData?.mobile_homepage_block} />
      </div>

      {/* Mega Offers */}
      <MegaOffersComponent
        megaOffers={pageData?.mega_offers}
        links={pageData?.mega_offers_link}
      />
    </div>
  );
};

// MegaOffersComponent.
const MegaOffersComponent = ({
  megaOffers,
  links,
}: {
  megaOffers: any;
  links: any;
}) => {
  const offers = JSON.parse(megaOffers);
  const offerLinks = JSON.parse(links);

  return (
    <div className="mega-offers">
      {Object.keys(offers).map((key) => (
        <a key={key} href={offerLinks[key]}>
          <Image
            src={`https://babystore.ae/storage/back/assets/homepage/${offers[key]}`}
            alt={key || "key"}
            fill
          />
        </a>
      ))}
    </div>
  );
};

export default HomePage;
