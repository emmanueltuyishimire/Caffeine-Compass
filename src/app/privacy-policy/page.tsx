
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Read the privacy policy for Caffeine Calculation Site to understand how we handle your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
        <h1 className="text-4xl font-bold font-headline mb-8">Privacy Policy</h1>
        
        <p><em>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</em></p>

        <p>
          Welcome to Caffeine Calculation Site ("we," "us," or "our"). We are committed to protecting your privacy and handling your data in an open and transparent manner. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We collect a minimal amount of information to provide and improve our service. The information we collect can be categorized as follows:
        </p>
        <ul>
          <li>
            <strong>Personal Data:</strong> This is personally identifiable information, such as your name and email address, that you voluntarily provide to us only when you choose to contact us through our contact form. You can use our website and all its calculators without providing any personal data.
          </li>
          <li>
            <strong>Usage Data:</strong> Like most websites, our servers may automatically collect information when you access the Site. This may include your IP address, browser type, operating system, access times, and the pages you have viewed. This information is used for analytical purposes to help us understand how our visitors use the site and to improve our service. This data is aggregated and does not personally identify you.
          </li>
          <li>
            <strong>Calculator Data:</strong> Any data you input into our calculators (e.g., drinks consumed, body weight, timing information) is processed entirely within your web browser on your own device. <strong>We do not collect, store, or transmit any of the data you enter into the calculators.</strong> Your calculator sessions are private and are erased when you close the browser tab.
          </li>
        </ul>

        <h2>2. Use of Your Information</h2>
        <p>
          We use the information we collect in the following ways:
        </p>
        <ul>
          <li>To respond to your inquiries, questions, and comments when you contact us.</li>
          <li>To monitor and analyze usage and trends to improve your experience with the Site and our tool offerings.</li>
          <li>To compile anonymous, aggregated statistical data for internal use to improve our content and services.</li>
        </ul>

        <h2>3. Disclosure of Your Information</h2>
        <p>
          We are committed to maintaining your trust. We do not sell, rent, trade, or otherwise transfer your Personally Identifiable Information to outside parties. We may share aggregated, anonymous Usage Data with analytics partners to help us understand site traffic and usage patterns.
        </p>

        <h2>4. Cookies and Web Beacons</h2>
        <p>
          We may use cookies and similar tracking technologies on the Site to help customize your experience. A cookie is a small file placed on your device. We use them for essential functions and for analytics purposes to understand site usage. When you access the Site, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can usually choose to set your browser to remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site.
        </p>

        <h2>5. Security of Your Information</h2>
        <p>
          We use administrative, technical, and physical security measures to help protect the information we collect. While we have taken reasonable steps to secure the limited information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </p>

        <h2>6. Policy for Children</h2>
        <p>
          Our services are not directed to children under the age of 13, and we do not knowingly solicit information from or market to them. If you become aware of any data we have inadvertently collected from children under age 13, please contact us using the information provided below so that we can promptly take action to delete it.
        </p>

        <h2>7. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have questions or comments about this Privacy Policy, please contact us through our <a href="/contact" rel="nofollow">contact page</a>.
        </p>
      </div>
    </div>
  );
}
