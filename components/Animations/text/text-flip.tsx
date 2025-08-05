import React from "react";

export default function CodeGreetings() {
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-[#131417] font-[Roboto] text-[#e5e5e5]">
        <h1 className="flex items-center text-[2.26rem] leading-[3.31rem] uppercase">
          System
          <span className="text-white">
            .<span className="text-[#e06c75]">out</span>.
          </span>
          <span className="text-[#61afef]">println</span>(
          <div className="ml-4 h-[3.31rem] overflow-hidden">
            <div className="animate-[scrollContinuous_4s_linear_infinite]">
              {/* Repeat first message at the end for smooth loop */}
              <div className="mb-[3.31rem] inline-block bg-[#20a7d8] px-3 py-1">
                Hello World!
              </div>
              <div className="mb-[3.31rem] inline-block bg-[#CD921E] px-3 py-1">
                ¡Hola Mundo!
              </div>
              <div className="mb-[3.31rem] inline-block bg-[#c10528] px-3 py-1">
                Hallo Welt!
              </div>
              <div className="mb-[3.31rem] inline-block bg-[#20a7d8] px-3 py-1">
                Ciao Mondo!
              </div>
              {/* Repeat first for smooth transition */}
              <div className="inline-block bg-[#20a7d8] px-3 py-1">
                Hello World!
              </div>
            </div>
          </div>
          )
        </h1>
      </div>

      <style jsx global>{`
        @keyframes scrollContinuous {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100%);
          }
        }
      `}</style>
    </>
  );
}
