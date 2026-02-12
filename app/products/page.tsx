import Footer from "@/components/Footer";
import ProductSection from "./ProductSection";
import CtaSection from "@/components/CtaSection";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Products | Smarter Tools for Business Growth',
  description: 'Discover Khrien\'s suite of professional products designed to enhance productivity and streamline business operations.',
};

const page = () => {
  return (
    <>
      <main className="px-4 lg:px-9 mt-[13vh] md:mt-[14vh]">
        <ProductSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
};

export default page;
