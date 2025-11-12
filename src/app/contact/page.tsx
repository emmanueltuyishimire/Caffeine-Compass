
import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with the Caffeine Compass team. We welcome your questions, feedback, and suggestions.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
            <Mail className="h-10 w-10 mx-auto text-primary mb-4" aria-label="Contact Icon" />
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Have a question, feedback, or a suggestion? We'd love to hear from you.
            </p>
        </div>
        <Card className="max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>The best way to reach us is by email.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-lg text-center">
                    For all inquiries, please email us at:
                    <a href="mailto:emmanueltuyishimire766@gmail.com" className="font-medium text-accent hover:underline block mt-2">
                        emmanueltuyishimire766@gmail.com
                    </a>
                </p>
            </CardContent>
        </Card>
    </div>
  );
}
