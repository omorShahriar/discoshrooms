import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Faq {
  faqs: {
    title: string;
    content: string;
  }[];
}

const FaqAccordion = ({ faqs }: Faq) => {
  return (
    <Accordion type="multiple" className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{faq.title}</AccordionTrigger>
          <AccordionContent>{faq.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
