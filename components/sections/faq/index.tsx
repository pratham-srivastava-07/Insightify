import { faqItems } from "@/components/global/faq-items"
import GradientText from "@/components/global/gradient-text"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"


export default function FaqSection() {
  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="text-center space-y-3">
        <GradientText className="text-4xl font-semibold" element="H2">
          Frequently Asked Questions
        </GradientText>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          Find answers to the most common questions about Insightify.
        </p>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-3xl bg-themeBlack border border-themeGray rounded-xl p-4"
      >
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-themeGray last:border-b-0">
            <AccordionTrigger className="text-white hover:no-underline text-left py-4">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-lightGray pb-4">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
