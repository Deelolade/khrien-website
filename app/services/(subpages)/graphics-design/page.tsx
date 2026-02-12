import { Metadata } from 'next';
import GraphicsDesignContent from './GraphicsDesignContent';

export const metadata: Metadata = {
  title: 'Graphics Design | Visual Communication & Branding Assets',
  description: 'Visual design for digital and print materials that support campaigns, products, and brand communication. Enhance your marketing with Khrien\'s professional graphics design.',
};

export default function Page() {
  return <GraphicsDesignContent />;
}
