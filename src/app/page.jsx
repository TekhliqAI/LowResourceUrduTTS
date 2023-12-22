import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import UploadSection from "@/components/UploadSection";
import FeaturedCard from "@/components/FeaturedCard";
import FeaturedSection from "@/components/FeaturedSection";

export default function Home() {
  return (
    <main>
      <Header />
      <UploadSection />
      <FeaturedSection />
      <Footer />
    </main>
  );
}
