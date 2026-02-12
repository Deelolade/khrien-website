import { Metadata } from 'next';
import SocialMediaContent from './SocialMediaContent';

export const metadata: Metadata = {
    title: 'Social Media Management | Build Online Authority',
    description: 'Strategy-driven content planning and execution for brands building visibility and authority online. Grow your presence with Khrien\'s social media management services.',
};

export default function Page() {
    return <SocialMediaContent />;
}
