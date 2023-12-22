import FeaturedSection from "@/components/FeaturedSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import UploadSection from "@/components/UploadSection";

export default function Home() {
  return (
    <main className="bg-[#0c0c0c] ">
      <Header />
      <UploadSection />
      <FeaturedSection />
      <Footer />
    </main>
  );
}
