import CaffeineAssistant from '@/components/features/CaffeineAssistant';
import { Bot } from 'lucide-react';
import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Caffeine Assistant — AI-Powered Support for Your Caffeine Questions',
    description: 'Get instant, AI-powered answers to all your questions about caffeine. From drink contents to optimal timing and health effects, our assistant is here to help.',
};

export default function SupportPage() {
    redirect('/ai-assistant');
}
