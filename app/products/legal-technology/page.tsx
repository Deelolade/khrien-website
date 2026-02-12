import HeroSection from "@/app/products/HeroSection"
import PainSection from "@/app/products/PainSection"
import FeaturesSection from "@/app/products/FeaturesSection"
import AudienceSection from "@/app/products/AudienceSection"
import AccessSection from "@/app/products/AccessSection"
import TechnologySection from "@/app/products/TechnologySection"
import ProductCta from "@/app/products/ProductCta"
import Footer from "@/components/Footer"
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Legal Technology | Smart Solutions for Legal Firms',
    description: 'Khrien provides specialized technology solutions for legal firms, focusing on efficiency, automation, and strategic growth.',
};

const page = () => {
    return (
        <main className="px-4 lg:px-9 min-h-screen">
            <HeroSection />
            <PainSection />
            <FeaturesSection />
            <AudienceSection />
            <AccessSection />
            <TechnologySection />
            <ProductCta />
            <Footer />
        </main>
    )
}
export default page
