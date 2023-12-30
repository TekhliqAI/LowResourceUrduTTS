import { Bebas_Neue } from "next/font/google";
import Uploader from "./Uploader";

const bebas_neue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const UploadSection = () => {
  return (
    <section className="flex flex-col items-center py-14 px-36 border-b-[1px] border-black border-opacity-20">
      <h1 className={`${bebas_neue.className} text-black text-6xl font-semibold  `}>Arabic text image to OCR</h1>
      <p className={`text-[#000] text-lg font-medium`}>
        Upload any handwritten arabic document as an image and we will using our
      </p>
      <p className={`text-[#000] text-lg font-medium`}>
        AI powered OCR technology convert it into a digital typed text
      </p>
      <Uploader />
    </section>
  );
};

export default UploadSection;
