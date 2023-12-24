import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className=" text-white py-2 flex justify-between px-12 items-center border-b-[1px] border-white border-opacity-20">
      <section className="Logo">
        <h2 className="font-semibold uppercase text-gray-100"> Tadween</h2>
      </section>

      <nav className="flex gap-6 items-center font-medium text-gray-100 ">
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
