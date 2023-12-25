"use client";
import { cn, bytesToMB, extractFileName } from "../lib/utils";
import { useState } from "react";
import Dropzone from "react-dropzone";

const maxSize = 2097152;

const Uploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setSelectedFile(file);
    console.log(file);
    const data = new FormData();
    data.set("file", file);

    // fetch("your_upload_url", {
    //   method: "POST",
    //   body: data,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("File uploaded successfully:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error uploading file:", error);
    //   });
  };

  return (
    <>
      <Dropzone minSize={0} maxSize={maxSize} multiple={false} onDrop={onDrop}>
        {({ getRootProps, getInputProps, isDragActive, isDragReject, fileRejections }) => (
          <section className="text-white h-60 bg-[#121212] w-full p-8 rounded-2xl mt-8">
            <div
              {...getRootProps()}
              className={cn(
                " w-full h-full flex-col text-[#323232] text-xl  border-2 border-dashed border-[#323232] rounded-md flex items-center justify-center",
                isDragActive ? "text-[#525252] border-[#525252] " : ""
              )}
            >
              <input {...getInputProps()} />
              {!isDragActive && "Click here or Drop image to upload"}
              {isDragActive && !isDragReject && "Drop to Upload"}
              {isDragReject && "File type is not acceptable"}
              {/* {isFileTooLarge && <div className="mt-2">File is too large.</div>} */}
            </div>
          </section>
        )}
      </Dropzone>

      {selectedFile && (
        <section className=" w-[800px] text-[#b4b4b4] py-4 bg-[#121212] px-8 rounded-md mt-8 ">
          <div className="grid grid-cols-10 gap-1 text-[#616161] border-b-[1px] border-white border-opacity-10 pb-2 mb-4">
            <div className="col-span-8 ">Name</div>
            <div className="col-span-1">Type</div>
            <div className="col-span-1">Size</div>
          </div>
          <div className="grid grid-cols-10 gap-1">
            <div className="col-span-8 ">
              <p>{extractFileName(selectedFile?.path)}</p>
            </div>
            <div className="col-span-1">
              <p>{selectedFile?.type.substring(6).toUpperCase()}</p>
            </div>
            <div className="col-span-1">
              <p>{bytesToMB(selectedFile?.size)}</p>
            </div>
          </div>

          {/* <p>
            {selectedFile?.path} - {bytesToMB(selectedFile?.size)}
          </p> */}
        </section>
      )}
    </>
  );
};

export default Uploader;
