import Link from "next/link";
import { Button } from "./ui/Button";

const Header = () => {
  return (
    <header
      id="Home"
      className=" text-white py-2 flex justify-between px-12 items-center border-b-[1px] border-white border-opacity-20"
    >
      <section className="Logo">
        <Link href="/">
          <p className="font-semibold uppercase text-gray-100 ">Tadween</p>
        </Link>
      </section>

      <nav className="flex gap-6 items-center font-medium text-gray-100 ">
        <Link href="/#Home">Home</Link>
        <Link href="/#Projects">Projects</Link>
        <Link href="/#FAQ">FAQ</Link>
        <Link href="/#Contact">Contact</Link>

        <li>
          <Button variant="secondary">Sign in</Button>
        </li>
      </nav>
    </header>
  );
};

export default Header;