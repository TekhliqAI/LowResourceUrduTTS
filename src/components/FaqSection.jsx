import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/Accordion";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const faqData = [
  {
    id: "item-1",
    question: "How does your OCR technology handle different handwriting styles?",
    answer: "Our OCR system is designed with advanced algorithms that can accurately recognize and digitize a wide range of handwriting styles, from cursive to print. Utilizing deep learning techniques, it adapts to various fonts and legibility levels, ensuring high accuracy in converting handwritten texts into digital formats."
  },
  {
    id: "item-2",
    question: "What makes your real-time audio translation tool unique?",
    answer: "Our Real-Time Audio Translation and Generation tool stands out with its ability to preserve the speaker's original tone and emotion during translation. This feature is crucial for maintaining the authenticity of communication, especially in cross-cultural contexts. Our tool uses sophisticated AI models to ensure seamless and culturally sensitive translations."
  },
  {
    id: "item-3",
    question: "How does your technology detect and flag deepfakes?",
    answer: "Our AI detection system employs advanced machine learning algorithms to analyze video content meticulously. It looks for subtle inconsistencies and anomalies that are typical in deepfakes, ensuring a high level of accuracy in identifying manipulated media. This technology is essential for maintaining integrity and authenticity in digital communications."
  },
  {
    id: "item-4",
    question: "Can your OCR technology process historical documents and manuscripts?",
    answer: "Yes, our OCR technology is particularly effective in digitizing historical documents and manuscripts. It can handle various degrees of aging and degradation in these texts, making it ideal for preserving and accessing historical archives and educational materials in digital formats."
  },
  {
    id: "item-5",
    question: "How does your audio tool adapt to different languages and dialects?",
    answer: "Our Real-Time Audio Translation and Generation tool is equipped with a vast database of languages and dialects, allowing it to adapt to and translate a wide range of global languages accurately. It is continuously learning and updating to include more languages and dialects, thus broadening its scope and usability in global interactions."
  }
];

const FaqSection = () => {
  return (
    <section
      id="FAQ"
      className="flex flex-col px-80 border-b-[1px] py-20 text-black gap-16 items-center border-white border-opacity-20"
    >
      <h2 className={`${bebas.className} text-4xl font-semibold`}>Frequently Asked Questions</h2>

      <Accordion className="w-full" type="single" collapsible>
        {faqData.map(({ id, question, answer }) => (
          <AccordionItem key={id} value={id}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FaqSection;
