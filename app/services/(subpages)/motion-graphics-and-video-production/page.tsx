import { Metadata } from 'next';
import MotionGraphicsContent from './MotionGraphicsContent';

export const metadata: Metadata = {
    title: 'Motion Graphics & Video Production | Engage with Video',
    description: 'Story-driven motion and video content designed to explain, promote, and engage. Capture your audience with Khrien\'s expert motion graphics and video production.',
};

export default function Page() {
    return <MotionGraphicsContent />;
}
