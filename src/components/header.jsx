import React from "react";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="bg-slate-900 text-white py-2 flex justify-between px-12 items-center">
      <section className="Logo">
        <h2 className="font-semibold uppercase"> Arabic OCR</h2>
      </section>

      <nav className="flex gap-6 items-center ">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Features</li>
        <li className="cursor-pointer">FAQ</li>
        <li className="cursor-pointer">Contact</li>
        <li>
          <Button variant="secondary">Sign in</Button>
        </li>
      </nav>
    </header>
  );
};
