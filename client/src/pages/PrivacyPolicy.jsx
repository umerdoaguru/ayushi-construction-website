import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mt-4 mb-6">Privacy Policy</h2>
      <div
                className="underline mx-auto"
                style={{
                  height: 3,
                  width: "4rem",
                  backgroundColor: "#34495E",

                  marginTop: 20,
                  marginBottom: 10,
                }}
              ></div>
      <div className="space-y-4 mt-4">
        <p>
          At Ayushi Construction, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website.
        </p>

        <h5 className="text-xl font-bold mt-4">1. Information We Collect</h5>
        <p>
          We may collect personal information such as your name, email address, phone number, and other relevant details when you fill out contact forms, subscribe to newsletters, or make inquiries.
        </p>

        <h5 className="text-xl font-bold mt-4">2. How We Use Your Information</h5>
        <p>
          We use your information to:
        </p>
        <ul className="list-disc ml-6">
          <li>Respond to your inquiries and provide the services you request.</li>
          <li>Improve our website and enhance your user experience.</li>
          <li>Send you promotional offers, newsletters, and updates if you have opted in to receive them.</li>
          <li>Comply with legal requirements and protect our rights.</li>
        </ul>

        <h5 className="text-xl font-bold mt-4">3. Data Security</h5>
        <p>
          We take reasonable measures to protect your personal information from unauthorized access, disclosure, or alteration. However, please note that no method of transmission over the internet is 100% secure.
        </p>

        <h5 className="text-xl font-bold mt-4">4. Third-Party Links</h5>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.
        </p>

        <h5 className="text-xl font-bold mt-4">5. Your Consent</h5>
        <p>
          By using our website, you consent to our Privacy Policy.
        </p>

        <h5 className="text-xl font-bold mt-4">6. Changes to Our Privacy Policy</h5>
        <p>
          Ayushi Construction reserves the right to update or change this Privacy Policy at any time. Any changes will be posted on this page.
        </p>

        <h5 className="text-xl font-bold mt-4">7. Contact Us</h5>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <address>
          Ayushi Construction, Infront of Garha Thana, Tripuri Chowk, Jabalpur, Madhya Pradesh 482002.
        </address>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
