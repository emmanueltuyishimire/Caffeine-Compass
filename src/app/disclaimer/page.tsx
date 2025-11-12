
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Disclaimer',
    description: 'Disclaimer for the Caffeine Compass website.',
};

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
        <h1 className="text-4xl font-bold font-headline mb-8">Disclaimer</h1>
        
        <p><em>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</em></p>

        <p>
            The information and tools provided by Caffeine Compass ("we," "us," or "our") on this website are for general informational and educational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
        </p>

        <h2>Medical Disclaimer</h2>
        <p>
            The site cannot and does not contain medical/health advice. The health information is provided for general informational and educational purposes only and is not a substitute for professional advice.
        </p>
        <p>
            Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. The use or reliance of any information or tools contained on this site is solely at your own risk. The calculators provide estimates based on established scientific literature and are not a substitute for professional medical advice, diagnosis, or treatment. Individual sensitivity and risk factors for caffeine toxicity can vary greatly due to genetics, pre-existing health conditions (especially cardiac issues), and concurrent use of medications.
        </p>
        <p>
            <strong>If you believe you or someone else has consumed a toxic amount of caffeine or is experiencing severe symptoms such as chest pain, seizures, or difficulty breathing, contact emergency medical services immediately.</strong>
        </p>

        <h2>External Links Disclaimer</h2>
        <p>
            The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site.
        </p>
      </div>
    </div>
  );
}
