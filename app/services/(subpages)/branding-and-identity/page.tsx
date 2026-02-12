import { Metadata } from 'next';
import BrandingContent from './BrandingContent';

export const metadata: Metadata = {
    title: 'Branding & Identity | Strategy-Led Design by Khrien',
    description: 'Strategy-led brand development focused on clarity, credibility, and consistency. Elevate your brand with Khrien\'s professional branding and identity systems.',
};

export default function Page() {
    return <BrandingContent />;
}
