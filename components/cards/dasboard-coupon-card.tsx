type Coupon = {
  discount: string;
  description: string;
  expiry: string;
  code: string;
};
const coupons: Coupon[] = [
  {
    discount: "20",
    description: " – Spend AED 200.00, get 20% on everything you shop.",
    expiry: "Sep 2, 2023",
    code: "SAVE20",
  },
  {
    discount: "15",
    description: "Buy for AED 150.00 and get 15% discount sitewide.",
    expiry: "Aug 10, 2023",
    code: "SHOP15",
  },
  {
    discount: "10",
    description: " – 10% off your first order.",
    expiry: "Jul 15, 2023",
    code: "FIRST10",
  },
  {
    discount: "25",
    description: " – 25% off orders above AED 500.00.",
    expiry: "Oct 1, 2023",
    code: "MEGA25",
  },
];
const CouponCard = ({ coupon }: { coupon: Coupon }) => {
  return (
    <div className="flex w-full gap-6">
      <div className="relative max-h-[107px] w-full max-w-[111px] rounded-[8px] bg-[#FC992D] p-[26px] text-center text-white">
        <div className="text-[40px] leading-[40px] font-bold tracking-[-2.4px] text-white">
          {coupon.discount}
        </div>
        <div className="text-[14px] font-normal tracking-[0.84px] text-white">
          {" "}
          % OFF{" "}
        </div>
        <div className="absolute right-0 bottom-[-10px] left-0 mx-auto max-w-[80px] rounded-[4px] bg-[#473A3F] px-[10px] py-2 text-center text-[10px] leading-[10px] font-medium">
          COUPON
        </div>
      </div>

      <div className="flex-1">
        <p className="p-2 text-[16px] leading-[24px] font-normal text-[#473A3F] md:text-[20px]">
          <span className="font-bold">Limited Offer</span> {coupon.description}
        </p>
        <p className="mb-3 p-2 text-[16px] leading-[20px] font-normal text-[#EA6C6A] md:text-[20px]">
          Expires {coupon.expiry}
        </p>
        <button className="rounded-[8px] bg-[#61B582] px-3 py-1 text-[18px] leading-[25px] font-normal text-white md:px-6 md:py-2">
          Copy code
        </button>
      </div>
    </div>
  );
};

export const DashboardCouponList = () => {
  return (
    <div className="flex flex-col justify-start gap-6">
      {coupons.map((coupon, idx) => (
        <CouponCard key={idx} coupon={coupon} />
      ))}
    </div>
  );
};
