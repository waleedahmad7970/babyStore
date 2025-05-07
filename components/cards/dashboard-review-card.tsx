import { men, rating_star } from "@/public/assets/icons";
import Image from "next/image";

const reviews = [
  {
    name: "Lionardo De Caprio",
    date: "January 22, 2023",
    rating: 5,
    text: `I was ready to delete my account, but the customer service team reached out and helped me with my issues. I'm glad I gave them a chance and now I'm having a much better experience on the platform.`,
    avatar: "/avatar.jpg",
  },
  {
    name: "Lionardo De Caprio",
    date: "January 22, 2023",
    rating: 5,
    text: `I was ready to delete my account, but the customer service team reached out and helped me with my issues. I'm glad I gave them a chance and now I'm having a much better experience on the platform.`,
    avatar: "/avatar.jpg",
  },
  {
    name: "Lionardo De Caprio",
    date: "January 22, 2023",
    rating: 5,
    text: `I was ready to delete my account, but the customer service team reached out and helped me with my issues. I'm glad I gave them a chance and now I'm having a much better experience on the platform.`,
    avatar: "/avatar.jpg",
  },
  {
    name: "Lionardo De Caprio",
    date: "January 22, 2023",
    rating: 5,
    text: `I was ready to delete my account, but the customer service team reached out and helped me with my issues. I'm glad I gave them a chance and now I'm having a much better experience on the platform.`,
    avatar: "/avatar.jpg",
  },
];

export default function DashboardReviewCards() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="flex flex-col justify-between gap-3 rounded-[8px] border border-none bg-[#FCFCFC] p-6"
        >
          <div className="flex items-center gap-2">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Image
                src={rating_star}
                key={i}
                className="h-[24px] min-w-[24px]"
                alt="rating"
              />
            ))}
          </div>

          <p className="text-[14px] leading-[24px] font-normal text-[#1F1F1F]">
            {review.text}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[6px]">
              <Image
                src={men}
                alt={review.name}
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-[14px] leading-[20px] font-semibold text-[#1F1F1F]">
                  {review.name}
                </p>
                <p className="text-[11.5px] leading-[16.5px] text-[#94A3B8]">
                  {review.date}
                </p>
              </div>
            </div>

            <div className="rounded bg-[#FFCD52] px-2 py-1 text-xs font-semibold text-white">
              {review.rating.toFixed(1)} ★
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
