import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const FaqSection = () => {
  return (
    <section className="flex flex-col px-96 border-b-[1px] py-20 text-white gap-16 items-center border-white border-opacity-20">
      <h2 className={`${bebas.className}  text-4xl font-semibold  `}>Frequently Asked Questions</h2>

      <Accordion className="w-full" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Lorem ipsum dolor sit amet.</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vero minima nemo modi odit veniam at itaque
            hic culpa sapiente.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Lorem ipsum dolor sit amet consectetur.</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet distinctio, iste dicta similique assumenda
            quasi minus nobis ut numquam expedita quam. Quas quae quidem consequatur voluptate fuga, facere alias esse?
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Lorem ipsum, dolor sit amet consectetur adipisicing.</AccordionTrigger>
          <AccordionContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, amet?</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, eos!</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam porro veniam, nobis harum recusandae saepe
            culpa beatae deleniti dolore laborum ratione nisi a distinctio libero.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FaqSection;
