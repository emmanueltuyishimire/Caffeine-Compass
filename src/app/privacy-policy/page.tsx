
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Read the privacy policy for Caffeine Compass to understand how we handle your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
        <h1 className="text-4xl font-bold font-headline mb-8">Privacy Policy</h1>
        
        <p><em>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</em></p>

        <p>
          Welcome to Caffeine Compass ("we," "us," or "our"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We may collect information about you in a variety of ways. The information we may collect on the Site includes:
        </p>
        <ul>
          <li>
            <strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, that you voluntarily give to us when you contact us.
          </li>
          <li>
            <strong>Usage Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Site.
          </li>
          <li>
            <strong>Calculator Data:</strong> Data you input into our calculators (e.g., drinks consumed, body weight, timing) is processed in your browser and is not stored on our servers.
          </li>
        </ul>

        <h2>2. Use of Your Information</h2>
        <p>
          Having accurate information permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
        </p>
        <ul>
          <li>Respond to your comments and questions and provide customer service.</li>
          <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
          <li>Compile anonymous statistical data and analysis for use internally.</li>
        </ul>

        <h2>3. Disclosure of Your Information</h2>
        <p>
          We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.
        </p>

        <h2>4. Cookies and Web Beacons</h2>
        <p>
          We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site.
        </p>

        <h2>5. Security of Your Information</h2>
        <p>
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </p>

        <h2>6. Policy for Children</h2>
        <p>
          We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.
        </p>

        <h2>7. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have questions or comments about this Privacy Policy, please contact us through our <a href="/contact">contact page</a>.
        </p>
      </div>
    </div>
  );
}
