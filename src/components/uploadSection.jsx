import React from "react";
import { Button } from "./ui/button";

const UploadSection = () => {
  return (
    <section className="flex flex-col items-center justify-between py-14 px-36">
      <h1 className="text-4xl font-semibold mb-6">JPG to OCR</h1>
      <div className="h-80 bg-gray-600 w-full p-8 rounded-md">
        <div className="w-full h-full  border-2 border-dashed rounded-md flex items-center justify-center">
          <Button>Choose Files</Button>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
