import { Button } from "./ui/button";
import { Bebas_Neue } from "next/font/google";

const bebas_neue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const UploadSection = () => {
  return (
    <section className="flex flex-col items-center py-14 px-36 h-screen border-b-[1px] border-white border-opacity-20">
      <h1 className={`${bebas_neue.className} text-white text-6xl font-semibold  `}>Arabic text image to OCR</h1>
      <p className={`text-[#b4b4b4] text-lg font-medium`}>
        Upload any handwritten arabic document as an image and we will using our
      </p>
      <p className={`text-[#b4b4b4] text-lg font-medium`}>
        AI powered OCR technology convert it into a digital typed text
      </p>
      <div className="h-80 bg-[#121212] w-full p-8 rounded-2xl mt-8">
        <div className="w-full h-full flex-col text-[#323232]  border-2 border-dashed border-[#323232] rounded-md flex items-center justify-center">
          <p className="text-2xl mb-6">Drag & Drop Image Here to Upload</p>
          <Button variant="secondary"> Choose Files</Button>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
