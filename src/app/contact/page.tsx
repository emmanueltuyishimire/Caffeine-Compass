
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
                We welcome your questions, feedback, and suggestions. The best way to reach our team is by email.
            </p>
        </div>
        <Card className="max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>Email Us</CardTitle>
                <CardDescription>For all inquiries, please send a message to the address below. We do our best to respond within 48 hours.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="text-lg text-center bg-muted p-4 rounded-md">
                    <a href="mailto:emmanueltuyishimire766@gmail.com" className="font-medium text-accent hover:underline break-words">
                        emmanueltuyishimire766@gmail.com
                    </a>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}
