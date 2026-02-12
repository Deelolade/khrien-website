import { Metadata } from 'next';
import ContentCreationContent from './ContentCreationContent';

export const metadata: Metadata = {
    title: 'Content Creation | Purpose-Built Copy & Visuals',
    description: 'Purpose-built written, visual, and multimedia content aligned with product and brand goals. Drive engagement with Khrien\'s strategic content creation services.',
};

export default function Page() {
    return <ContentCreationContent />;
}
