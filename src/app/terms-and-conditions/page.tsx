
import { Metadata } from 'next';
import ClientDate from '@/components/ui/client-date';

export const metadata: Metadata = {
    title: 'Terms and Conditions',
    description: 'Read the terms and conditions for using the Caffeine Compass website.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
        <h1 className="text-4xl font-bold font-headline mb-8">Terms and Conditions</h1>
        
        <p><em>Last Updated: <ClientDate /></em></p>

        <p>
          Welcome to Caffeine Compass ("we," "us," or "our"). These Terms and Conditions ("Terms") govern your use of our website, located at caffeine-calculation-site.com (the "Site"), and the tools, content, and services offered thereon.
        </p>
        <p>
          By accessing or using our Site, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to all of the terms and conditions stated on this page, do not continue to use Caffeine Compass.
        </p>

        <h2>1. Nature of Our Service</h2>
        <p>
          Caffeine Compass provides informational content, educational articles, and software tools (the "Calculators") designed to help you understand and estimate your caffeine consumption and its potential effects. All content and tools are for general educational purposes only.
        </p>
        
        <h2>2. Medical Disclaimer</h2>
        <p>
          <strong>This Website does not provide medical advice.</strong> The information and tools on this Site are not intended or implied to be a substitute for professional medical advice, diagnosis, or treatment. All content, including text, graphics, images, and information, contained on or available through this website is for general information purposes only.
        </p>
        <p>
          You should never disregard professional medical advice or delay in seeking it because of something you have read on this Site. We make no representation and assume no responsibility for the accuracy or reliability of information, content, or tools available on or through this website. The use or reliance on any information provided on this site is solely at your own risk.
        </p>
        <p>
          <strong>If you are experiencing a medical emergency or have severe symptoms from caffeine consumption (such as chest pain, seizures, or difficulty breathing), contact emergency medical services immediately.</strong>
        </p>

        <h2>3. Intellectual Property Rights</h2>
        <p>
          Unless otherwise stated, Caffeine Compass and/or its licensors own the intellectual property rights for all material on the Site. This includes, but is not limited to, the text, graphics, website design, calculators, and logos. All intellectual property rights are reserved. You are granted a limited license only for the purposes of viewing and using the material and tools contained on this Site for your personal, non-commercial use.
        </p>

        <h2>4. Restrictions</h2>
        <p>You are specifically restricted from all of the following:</p>
        <ul>
          <li>Publishing any Site material in any other media without our prior written consent.</li>
          <li>Selling, sublicensing, and/or otherwise commercializing any Site material.</li>
          <li>Using this Site in any way that is or may be damaging to this Site or its infrastructure.</li>
          <li>Using this Site in any way that impacts user access to this Site.</li>
          <li>Using this Site contrary to applicable laws and regulations, or in any way that may cause harm to the Site, or to any person or business entity.</li>
          <li>Engaging in any data mining, data harvesting, data extracting, or any other similar activity in relation to this Site.</li>
        </ul>

        <h2>5. No Warranties</h2>
        <p>
          This Site is provided "as is," with all faults. Caffeine Compass expresses no representations or warranties, of any kind, related to this Site or the materials and tools contained on this Site. The calculators provide estimates based on public data and scientific models, but individual results will vary. We do not warrant the accuracy, completeness, or usefulness of this information.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          In no event shall Caffeine Compass, nor any of its officers, directors, or employees, be held liable for anything arising out of or in any way connected with your use of this Site, whether such liability is under contract, tort, or otherwise. Caffeine Compass, including its officers, directors, and employees, shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Site.
        </p>

        <h2>7. Indemnification</h2>
        <p>
          You hereby indemnify to the fullest extent Caffeine Compass from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these Terms.
        </p>

        <h2>8. Severability</h2>
        <p>
          If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
        </p>

        <h2>9. Variation of Terms</h2>
        <p>
          Caffeine Compass is permitted to revise these Terms at any time as it sees fit, and by using this Site you are expected to review these Terms on a regular basis.
        </p>

        <h2>10. Governing Law & Jurisdiction</h2>
        <p>
          These Terms will be governed by and interpreted in accordance with the laws of the jurisdiction in which the website owner is based, without regard to its conflict of law provisions.
        </p>

         <h2>11. Contact Information</h2>
        <p>
          If you have any queries regarding any of our terms, please contact us through our <a href="/contact" rel="nofollow">contact page</a>.
        </p>
      </div>
    </div>
  );
}
