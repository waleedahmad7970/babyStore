import AccordionSection from "./accordian-section";

const FeaturesAccordion = ({ features }: { features: string[] }) => {
  if (!features?.length) return null;
  return (
    <AccordionSection title="Features">
      <ul className="list-disc pl-3">
        {features?.map((item, index) => {
          return (
            item !== "\\N" && (
              <li
                key={index}
                className="font-inter mb-2 text-[12px] leading-[14.52px] font-normal"
              >
                {item}
              </li>
            )
          );
        })}
      </ul>
    </AccordionSection>
  );
};

export default FeaturesAccordion;
