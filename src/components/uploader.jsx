"use client";
import { cn } from "@/lib/utils";
import Dropzone from "react-dropzone";

const maxSize = 2097152;

const Uploader = () => {
  const onDrop = (acceptedFiles) => {};

  return (
    <Dropzone minSize={0} maxSize={maxSize} onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
      {({ getRootProps, getInputProps, isDragActive, isDragReject, fileRejections }) => (
        <section className="text-white h-80 bg-[#121212] w-full p-8 rounded-2xl mt-8">
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
  );
};

export default Uploader;
