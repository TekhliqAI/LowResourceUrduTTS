"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/Button";
import { FaChevronUp } from "react-icons/fa";
import { cn } from "../lib/utils";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      className={cn(
        "fixed bottom-5 right-5  text-[#b4b4b4] bg-black  hover:text-black border-2 border-white border-opacity-10",
        visible ? "" : "hidden"
      )}
      onClick={handleScroll}
      variant="secondary"
    >
      <FaChevronUp />
    </Button>
  );
};

export default ScrollToTop;
