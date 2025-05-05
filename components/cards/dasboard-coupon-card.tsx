type Coupon = {
  discount: string;
  description: string;
  expiry: string;
  code: string;
};
const coupons: Coupon[] = [
  {
    discount: "20",
    description:
      "Limited Offer – Spend AED 200.00, get 20% on everything you shop.",
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
    description: "Special Deal – 10% off your first order.",
    expiry: "Jul 15, 2023",
    code: "FIRST10",
  },
  {
    discount: "25",
    description: "Mega Sale – 25% off orders above AED 500.00.",
    expiry: "Oct 1, 2023",
    code: "MEGA25",
  },
];
const CouponCard = ({ coupon }: { coupon: Coupon }) => {
  return (
    <div className="flex w-full max-w-3xl items-center rounded-xl bg-white p-4 shadow-md">
      <div className="relative mr-4 flex h-20 w-20 flex-col items-center justify-center rounded-lg bg-orange-500 text-white">
        <div className="text-2xl font-bold">{coupon.discount}</div>
        <div className="text-xs"> % OFF </div>
        <div className="absolute right-0 bottom-0 left-0 rounded-b-lg bg-gray-800 py-1 text-center text-[10px] font-semibold">
          COUPON
        </div>
      </div>

      <div className="flex-1">
        <p className="font-semibold text-gray-700">{coupon.description}</p>
        <p className="mt-1 text-sm font-semibold text-red-500">
          Expires {coupon.expiry}
        </p>
      </div>

      <button className="ml-4 rounded-lg bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600">
        Copy code
      </button>
    </div>
  );
};

export const DashboardCouponList = () => {
  return (
    <div className="space-y-4">
      {coupons.map((coupon, idx) => (
        <CouponCard key={idx} coupon={coupon} />
      ))}
    </div>
  );
};
