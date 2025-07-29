import AccordionSection from "./accordian-section";

const SpecificationAccordion = ({
  content,
  title,
}: {
  title: string;
  content?: string;
}) => {
  if (!content) return null;
  return <AccordionSection title={title}>{content}</AccordionSection>;
};

export default SpecificationAccordion;
