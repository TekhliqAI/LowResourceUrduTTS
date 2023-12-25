import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import UploadSection from "@/components/UploadSection";
import FeaturedCard from "@/components/FeaturedCard";
import FeaturedSection from "@/components/FeaturedSection";
import FaqSection from "@/components/FaqSection";
import ScrollToTop from "@/components/scrollToTop";

export default function Home() {
  return (
    <main>
      <Header />
      <UploadSection />
      <FeaturedSection />
      <FaqSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
