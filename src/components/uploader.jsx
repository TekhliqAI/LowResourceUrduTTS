"use client";
import { useState } from "react";
import Dropzone from "react-dropzone";
import { cn, bytesToMB, extractFileName } from "../lib/utils";
import Image from "next/image";

const maxSize = 2097152;

const Uploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setSelectedFile(file);
    console.log(file);
    const data = new FormData();
    data.set("file", file);
  };

  const handleReset = () => {
    setSelectedFile(null);
  };

  return (
    <>
      {!selectedFile && (
        <Dropzone
          minSize={0}
          maxSize={maxSize}
          multiple={false}
          onDrop={onDrop}
        >
          {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <section className="text-black h-60 bg-[#F4F7FA] w-full p-8 rounded-2xl mt-8">
              <div
                {...getRootProps()}
                className={cn(
                  " w-full h-full flex-col text-[#323232] text-xl  border-2 border-dashed border-black rounded-md flex items-center justify-center",
                  isDragActive ? "text-[#525252] border-[#525252] " : ""
                )}
              >
                <input {...getInputProps()} />
                {!isDragActive && "Click here or Drop image to upload"}
                {isDragActive && !isDragReject && "Drop to Upload"}
                {isDragReject && "File type is not acceptable"}
              </div>
            </section>
          )}
        </Dropzone>
      )}

      {selectedFile && (
        <section className="w-[800px] text-[#616161] py-4 bg-[#F4F7FA] px-8 rounded-md mt-8 relative">
          <div className="absolute top-2 right-3 cursor-pointer" onClick={handleReset}>
            X
          </div>
          <div className="grid grid-cols-12 gap-1 text-[#000] border-b-black border-b-[1px] border-opacity-10 pb-2 mb-4">
            <div className="col-span-2">Image</div>
            <div className="col-span-6">Name</div>
            <div className="col-span-2">Type</div>
            <div className="col-span-2">Size</div>
          </div>
          <div className="grid grid-cols-12 gap-1 items-center">
            <div className="col-span-2">
              <Image
                src={URL.createObjectURL(selectedFile)}
                alt="Thumbnail"
                width={20}
                height={20}
                className="h-12 w-12 object-cover"
              />
            </div>
            <div className="col-span-6">
              <p>{extractFileName(selectedFile?.path)}</p>
            </div>
            <div className="col-span-2">
              <p>{selectedFile?.type.substring(6).toUpperCase()}</p>
            </div>
            <div className="col-span-2">
              <p>{bytesToMB(selectedFile?.size)}</p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Uploader;
