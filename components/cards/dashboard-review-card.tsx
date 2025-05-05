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
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <div className="mb-4 flex items-center gap-1">
            {Array.from({ length: review.rating }).map((_, i) => (
              <span key={i} className="text-xl text-yellow-400">
                ★
              </span>
            ))}
          </div>

          <p className="mb-4 text-sm text-gray-800">{review.text}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={review.avatar}
                alt={review.name}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-xs text-gray-400">{review.date}</p>
              </div>
            </div>

            <div className="rounded bg-yellow-100 px-2 py-1 text-xs font-semibold text-yellow-600">
              {review.rating.toFixed(1)} ★
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
