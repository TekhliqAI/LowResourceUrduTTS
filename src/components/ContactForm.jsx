import { Bebas_Neue } from "next/font/google";
import { Button } from "./ui/Button";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const ContactForm = () => {
  return (
    <section
      id="Contact"
      className="flex flex-col px-80 border-b-[1px] py-20 text-white gap-16 items-center border-white border-opacity-20"
    >
      <h2 className={`${bebas.className}  text-4xl font-semibold  `}>Contact Us</h2>
      <form>
        <div className="flex gap-4">
          <div className="mb-4">
            <label htmlFor="name" className="block  text-sm mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border bg-[#0c0c0c] border-white border-opacity-20 rounded-md focus:outline-none focus:border-opacity-40"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block  text-sm mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border bg-[#0c0c0c] border-white border-opacity-20 rounded-md focus:outline-none focus:border-opacity-40"
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block  text-sm mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full px-4 py-2 border bg-[#0c0c0c] border-white border-opacity-20 rounded-md focus:outline-none focus:border-opacity-40"
          ></textarea>
        </div>
        <Button className="w-full" variant="secondary">
          Submit
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
