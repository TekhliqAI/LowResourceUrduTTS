import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-12 py-6  border-t-[1px] border-white border-opacity-20">
      <Link href="/">
        <p className="font-semibold uppercase text-[#b4b4b4]">TADWEEN</p>
      </Link>
      <p className=" text-[#b4b4b4] pr-8" >Copyright ©️ 2023 Tekhliq. All rights reserved.</p>
    </footer>
  );
};

export default Footer;