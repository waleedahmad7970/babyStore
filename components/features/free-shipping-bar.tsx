"use client";

export default function FreeShippingBar({ total: total }: { total: number }) {
  const target = 100;
  const progress = Math.min((total / target) * 100, 100);

  return (
    <div className="mt-4 w-full">
      {/* Animated Text */}

      <p className="leading-tight font-medium text-gray-800">
        {total < target ? (
          <>
            Spend{" "}
            <span className="font-semibold text-[#E7448A]">
              AED {target - total}
            </span>{" "}
            more for{" "}
            <span className="font-semibold text-[#E7448A]">Free Shipping</span>
          </>
        ) : (
          <span className="animate-bounce font-semibold text-[#E7448A]">
            🎉 Free Shipping Unlocked!
          </span>
        )}
      </p>

      {/* Running / Processing Progress Bar */}
      <div className="relative mt-2 h-3 w-full overflow-hidden rounded-full bg-[#FFF0F5]">
        <div
          className="processing-bar h-full bg-[#E7448A]"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes moveStripes {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 40px 0;
          }
        }

        .processing-bar {
          background-image: repeating-linear-gradient(
            45deg,
            #ff5fa8,
            #ff5fa8 10px,
            #e7448a 10px,
            #e7448a 20px
          );
          animation: moveStripes 2s linear infinite;
          transition: width 0s ease-out;
        }
      `}</style>
    </div>
  );
}
