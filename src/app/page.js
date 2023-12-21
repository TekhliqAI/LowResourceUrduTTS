import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import UploadSection from "@/components/uploadSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <UploadSection />
    </main>
  );
}
