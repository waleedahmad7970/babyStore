import AccordionSection from "./accordian-section";

const HighlightsAccordion = ({
  sku,
  color,
  type,
  weight,
  dimensions,
  returns,
  recommended_age,
}: {
  sku: string;
  weight: string | number;
  dimensions: string;
  returns: string | number;
  recommended_age: string | number;
  color: string;
  type: string;
}) => {
  return (
    <AccordionSection title="Highlights">
      {
        <div>
          {recommended_age && (
            <p className="mb-1 text-[12px] font-semibold">
              Recommended Age:{" "}
              <span className="text-[12px] leading-[20px] font-normal">
                {recommended_age}
              </span>
            </p>
          )}
          {returns && (
            <p className="mb-1 text-[12px] font-semibold">
              Returns:{" "}
              <span className="text-[12px] leading-[20px] font-normal">
                {" "}
                {returns === 1
                  ? "No Return"
                  : returns === 2
                    ? "Eligible for refund within 7 days."
                    : ""}
              </span>
            </p>
          )}
          {type && (
            <p className="mb-1 text-[12px] font-semibold">
              Type:{" "}
              <span className="text-[12px] leading-[20px] font-normal">
                {" "}
                {type}
                {/* Cot, Wheeled Bottom */}
              </span>
            </p>
          )}

          {color && (
            <p className="mb-1 text-[12px] font-semibold">
              Color:{" "}
              <span className="text-[12px] leading-[20px] font-normal">
                {color}
              </span>
            </p>
          )}
          {dimensions && (
            <p className="mb-1 text-[12px] font-semibold">
              W x H x D:{" "}
              <span className="text-[12px] leading-[20px] font-normal">
                {" "}
                {dimensions}
              </span>
            </p>
          )}
          {weight && (
            <p className="mb-1 text-[12px] font-semibold">
              Weight:{" "}
              <span className="text-[12px] leading-[20px] font-normal">
                {" "}
                {weight}
              </span>
            </p>
          )}
          {sku && (
            <p className="text-[12px] font-semibold">
              SKU:{" "}
              <span className="text-[12px] leading-[20px] font-normal">
                {" "}
                {sku?.toLocaleUpperCase()}
              </span>
            </p>
          )}
        </div>
      }
    </AccordionSection>
  );
};

export default HighlightsAccordion;
