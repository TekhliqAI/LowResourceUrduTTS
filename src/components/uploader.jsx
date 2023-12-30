"use client";
import { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import { cn, bytesToMB, extractFileName } from "../lib/utils";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

const maxSize = 2097152;

const Uploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    console.log(file);
    const data = new FormData();
    data.set("file", file);

    setSelectedFile(file);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 100);
  };

  const handleReset = () => {
    setSelectedFile(null);
    setUploadProgress(0);
  };

  useEffect(() => {
    if (uploadProgress === 100) {
      setTimeout(() => {
        setUploadProgress(0);
      }, 500);
    }
  }, [uploadProgress]);

  return (
    <>
      {!selectedFile && uploadProgress === 0 && (
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

      {uploadProgress > 0 && uploadProgress < 100 && (
        <div className="w-full bg-gray-200 h-8 mt-8 rounded-md">
          <div
            className="bg-blue-600 h-8 rounded-md"
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>
      )}

      {selectedFile && uploadProgress === 0 && (
        <section className="w-[800px] text-[#616161] py-4 bg-[#F4F7FA] px-8 rounded-md mt-8 relative">
          <div
            className="absolute top-2 right-3 cursor-pointer"
            onClick={handleReset}
          >
            <IoClose size={24} />
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
