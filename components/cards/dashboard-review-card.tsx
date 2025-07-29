import { men, rating_star } from "@/public/assets/icons";
import { useAppSelector } from "@/store/hooks";
import moment from "moment";
import Image from "next/image";

interface Review {
  stars: number;
  comment: string;
  name?: string;
  created_at: string;
}

export default function DashboardReviewCards() {
  const { userReviews = [] } = useAppSelector((state) => state.dashboard) as {
    userReviews: Review[];
  };

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {userReviews?.map((review, index) => (
        <div
          key={index}
          className="flex flex-col justify-between gap-3 rounded-[8px] border border-none bg-[#FCFCFC] p-6"
        >
          <div className="flex items-center gap-2">
            {Array.from({ length: review.stars }).map((_, i) => (
              <Image
                src={rating_star}
                key={i}
                className="h-[24px] min-w-[24px]"
                alt="rating"
              />
            ))}
          </div>

          <p className="text-[14px] leading-[24px] font-normal text-[#1F1F1F]">
            {review.comment}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[6px]">
              <Image
                src={men}
                alt={review.name || "nam"}
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-[14px] leading-[20px] font-semibold text-[#1F1F1F]">
                  {review.name || "User Name"}
                </p>
                <p className="text-[11.5px] leading-[16.5px] text-[#94A3B8]">
                  {moment(review.created_at).format("MMMM D, YYYY")}
                </p>
              </div>
            </div>

            <div className="rounded bg-[#FFCD52] px-2 py-1 text-xs font-semibold text-white">
              {review.stars.toFixed(1)} ★
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
