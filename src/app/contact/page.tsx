
import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageCircle, Lightbulb, Handshake, AlertCircle } from 'lucide-react';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
    title: 'Contact Us — Caffeine Compass',
    description: 'Get in touch with the Caffeine Compass team. We welcome your feedback, suggestions, partnership inquiries, and questions.',
};

const contactReasons = [
    {
        icon: MessageCircle,
        title: 'Feedback & Suggestions',
        text: 'Have an idea for a new calculator or an improvement to an existing one? We\'d love to hear it.'
    },
    {
        icon: Lightbulb,
        title: 'Content Ideas',
        text: 'Is there a topic related to caffeine, sleep, or performance you want us to write about? Let us know.'
    },
    {
        icon: Handshake,
        title: 'Partnerships & Collaborations',
        text: 'Interested in working with us? We are open to collaborations that align with our mission.'
    },
    {
        icon: AlertCircle,
        title: 'Report an Issue',
        text: 'Found a bug or incorrect information on our site? Please report it so we can make corrections.'
    }
];

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Caffeine Compass",
  "description": "Get in touch with the Caffeine Compass team for feedback, suggestions, partnerships, or to report an issue.",
  "url": "https://calculation.site/contact",
  "publisher": {
    "@type": "Organization",
    "name": "Caffeine Compass",
    "logo": {
      "@type": "ImageObject",
      "url": "https://calculation.site/app.png"
    }
  }
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageJsonLd} />
      <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="text-center mb-12">
              <Mail className="h-10 w-10 mx-auto text-primary mb-4" aria-label="Contact Icon" />
              <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Contact Us</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  Your input helps us improve. We value your feedback and are here to answer your questions.
              </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className='space-y-6'>
                  <h2 className="text-2xl font-bold font-headline">Why Get in Touch?</h2>
                  {contactReasons.map((reason) => (
                      <div key={reason.title} className="flex items-start gap-4">
                          <div className="p-2 bg-muted rounded-full">
                              <reason.icon className="h-5 w-5 text-primary" aria-label={`${reason.title} icon`} />
                          </div>
                          <div>
                              <h3 className="font-semibold">{reason.title}</h3>
                              <p className="text-sm text-muted-foreground">{reason.text}</p>
                          </div>
                      </div>
                  ))}
              </div>
              <Card className="self-start">
                  <CardHeader>
                      <CardTitle>Send Us an Email</CardTitle>
                      <CardDescription>For all inquiries, please send a message to the address below. We do our best to respond within 48 business hours.</CardDescription>
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
      </div>
    </>
  );
}
