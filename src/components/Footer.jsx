import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-12 py-6  border-t-[1px] border-white border-opacity-20">
      <Link href="/">
        <p className="font-semibold uppercase text-[#000]">TADWEEN</p>
      </Link>
      <p className=" text-[#000] pr-8" >Copyright ©️ 2023 Tekhliq. All rights reserved.</p>
    </footer>
  );
};

export default Footer;