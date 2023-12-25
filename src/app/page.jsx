import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import UploadSection from "../components/UploadSection";
import FeaturedSection from "../components/FeaturedSection";
import FaqSection from "../components/FaqSection";
import ScrollToTop from "../components/ScrollToTop";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main>
      <Header />
      <UploadSection />
      <FeaturedSection />
      <FaqSection />
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
