import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const bytesToMB = (bytes) => {
  if (isNaN(bytes) || bytes < 0) {
    return "Invalid input";
  }

  const megabytes = bytes / (1024 * 1024);
  return megabytes.toFixed(2) + " MB";
};

export const extractFileName = (filePath) => {
  const fileNameWithExtension = filePath.replace(/^.*[\\\/]/, "");
  const fileNameWithoutExtension = fileNameWithExtension.replace(/\.[^/.]+$/, "");
  return fileNameWithoutExtension;
};
