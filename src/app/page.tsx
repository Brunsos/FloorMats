import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import ProductCategories from "@/components/ProductCategories";
import ROIStats from "@/components/ROIStats";
import ROICalculator from "@/components/ROICalculator";
import Gallery from "@/components/Gallery";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <ProductCategories />
        <ROIStats />
        <ROICalculator />
        <Gallery />
        <Industries />
        <Testimonials />
        <About />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
