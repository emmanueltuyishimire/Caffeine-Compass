
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms and Conditions',
    description: 'Read the terms and conditions for using the Caffeine Compass website.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
        <h1 className="text-4xl font-bold font-headline mb-8">Terms and Conditions</h1>
        
        <p><em>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</em></p>

        <p>
          Welcome to Caffeine Compass. These terms and conditions outline the rules and regulations for the use of our website, located at [your website URL].
        </p>
        <p>
          By accessing this website, we assume you accept these terms and conditions. Do not continue to use Caffeine Compass if you do not agree to all of the terms and conditions stated on this page.
        </p>

        <h2>1. Intellectual Property Rights</h2>
        <p>
          Other than the content you own, under these Terms, Caffeine Compass and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted a limited license only for purposes of viewing the material contained on this Website.
        </p>

        <h2>2. Restrictions</h2>
        <p>You are specifically restricted from all of the following:</p>
        <ul>
          <li>publishing any Website material in any other media;</li>
          <li>selling, sublicensing and/or otherwise commercializing any Website material;</li>
          <li>publicly performing and/or showing any Website material;</li>
          <li>using this Website in any way that is or may be damaging to this Website;</li>
          <li>using this Website in any way that impacts user access to this Website;</li>
          <li>using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li>
          <li>engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;</li>
        </ul>

        <h2>3. No warranties</h2>
        <p>
          This Website is provided "as is," with all faults, and Caffeine Compass expresses no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.
        </p>

        <h2>4. Medical Disclaimer</h2>
        <p>
          All content and tools on this website are for informational and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
        </p>

        <h2>5. Limitation of liability</h2>
        <p>
          In no event shall Caffeine Compass, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Caffeine Compass, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Website.
        </p>

        <h2>6. Indemnification</h2>
        <p>
          You hereby indemnify to the fullest extent Caffeine Compass from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these Terms.
        </p>

        <h2>7. Governing Law & Jurisdiction</h2>
        <p>
          These Terms will be governed by and interpreted in accordance with the laws of the State/Country of [Your Jurisdiction], and you submit to the non-exclusive jurisdiction of the state and federal courts located in [Your Jurisdiction] for the resolution of any disputes.
        </p>
      </div>
    </div>
  );
}
