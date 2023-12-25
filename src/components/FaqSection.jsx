import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const FaqSection = () => {
  return (
    <section
      id="FAQ"
      className="flex flex-col px-80 border-b-[1px] py-20 text-white gap-16 items-center border-white border-opacity-20"
    >
      <h2 className={`${bebas.className}  text-4xl font-semibold  `}>Frequently Asked Questions</h2>

      <Accordion className="w-full" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>How does your OCR technology handle different handwriting styles?</AccordionTrigger>
          <AccordionContent>
            Our OCR system is designed with advanced algorithms that can accurately recognize and digitize a wide range
            of handwriting styles, from cursive to print. Utilizing deep learning techniques, it adapts to various fonts
            and legibility levels, ensuring high accuracy in converting handwritten texts into digital formats.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What makes your real-time audio translation tool unique?</AccordionTrigger>
          <AccordionContent>
            Our Real-Time Audio Translation and Generation tool stands out with its ability to preserve the speaker's
            original tone and emotion during translation. This feature is crucial for maintaining the authenticity of
            communication, especially in cross-cultural contexts. Our tool uses sophisticated AI models to ensure
            seamless and culturally sensitive translations.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How does your technology detect and flag deepfakes?</AccordionTrigger>
          <AccordionContent>
            Our AI detection system employs advanced machine learning algorithms to analyze video content meticulously.
            It looks for subtle inconsistencies and anomalies that are typical in deepfakes, ensuring a high level of
            accuracy in identifying manipulated media. This technology is essential for maintaining integrity and
            authenticity in digital communications.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Can your OCR technology process historical documents and manuscripts?</AccordionTrigger>
          <AccordionContent>
            Yes, our OCR technology is particularly effective in digitizing historical documents and manuscripts. It can
            handle various degrees of aging and degradation in these texts, making it ideal for preserving and accessing
            historical archives and educational materials in digital formats.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>How does your audio tool adapt to different languages and dialects?</AccordionTrigger>
          <AccordionContent>
            Our Real-Time Audio Translation and Generation tool is equipped with a vast database of languages and
            dialects, allowing it to adapt to and translate a wide range of global languages accurately. It is
            continuously learning and updating to include more languages and dialects, thus broadening its scope and
            usability in global interactions.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FaqSection;
