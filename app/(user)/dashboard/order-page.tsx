import OrderTable from "@/components/tables/order-table";
import React, { useState } from "react";
const OrdersStatus = [
  { label: "Unpaid", value: "pending" },
  { label: "Out for delivery", value: "ready" },
  { label: "Shipped", value: "shipped" },
  { label: "Returned", value: "returned" },
  { label: "Delivered", value: "delivered" },
];
export default function DashboardOrderPage() {
  const [selectOrderStatus, setSelectOrderStatus] = useState("");
  const handleUpdate = (val: string) => {
    if (val === selectOrderStatus) setSelectOrderStatus("");
    else setSelectOrderStatus(val);
  };
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className="mb-4 flex w-full flex-row justify-start overflow-x-auto py-2">
          {OrdersStatus?.map((item, index) => {
            return (
              <p
                onClick={() => handleUpdate(item?.value)}
                key={index}
                className={`min-w-max cursor-pointer rounded-[4px] border-r-1 border-[#F1F1F5] px-2 text-[14px] leading-[25px] font-normal text-[#473A3F] hover:bg-[#fd71af] hover:text-white ${selectOrderStatus === item.value ? "bg-[#fd71af] text-white" : ""}`}
              >
                {item?.label}
              </p>
            );
          })}
        </div>
        {/* <div className="flex items-center justify-start md:hidden">
          <div className="flex items-center justify-start gap-3 md:hidden">
            <p className="min-w-[120px] text-[18px] leading-[25px] font-normal text-[#473A3F]">
              Recent orders
            </p>
            <Image src={arrow_down} className="h-4 min-w-4" alt="s" />
          </div>
        </div> */}
      </div>
      <OrderTable selectOrderStatus={selectOrderStatus} />
    </div>
  );
}
