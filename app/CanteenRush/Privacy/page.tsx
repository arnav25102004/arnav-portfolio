export const metadata = {
  title: "Privacy Policy — CanteenRush",
};

const css = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #fff;
    color: #1a1a1a;
    line-height: 1.7;
  }
  header {
    background: #F97316;
    color: white;
    padding: 40px 24px 32px;
  }
  header h1 { font-size: 28px; font-weight: 700; margin-bottom: 4px; }
  header p { font-size: 14px; opacity: 0.85; }
  .container { max-width: 780px; margin: 0 auto; padding: 40px 24px 80px; }
  .intro {
    background: #fff7ed;
    border-left: 4px solid #F97316;
    padding: 16px 20px;
    border-radius: 0 8px 8px 0;
    margin-bottom: 36px;
    font-size: 15px;
    color: #7c3a00;
  }
  h2 {
    font-size: 18px;
    font-weight: 700;
    color: #F97316;
    margin: 36px 0 12px;
    padding-bottom: 6px;
    border-bottom: 1px solid #ffe0c2;
  }
  p { margin-bottom: 14px; font-size: 15px; color: #333; }
  ul { margin: 8px 0 14px 20px; }
  li { margin-bottom: 8px; font-size: 15px; color: #333; }
  .card {
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    padding: 20px 24px;
    margin: 16px 0;
  }
  .card strong { color: #111; }
  .contact-box {
    background: #F97316;
    color: white;
    border-radius: 12px;
    padding: 24px 28px;
    margin-top: 40px;
  }
  .contact-box h3 { font-size: 17px; margin-bottom: 10px; }
  .contact-box a { color: white; font-weight: 600; }
  footer {
    text-align: center;
    padding: 24px;
    font-size: 13px;
    color: #9ca3af;
    border-top: 1px solid #f3f4f6;
  }
`;

export default function CanteenRushPrivacyPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <header>
        <h1>🍽️ CanteenRush</h1>
        <p>Privacy Policy · Effective Date: June 25, 2026 · Last Updated: June 25, 2026</p>
      </header>
      <div className="container">
        <div className="intro">
          CanteenRush is a campus canteen pre-ordering platform built for Christ University, Bangalore.
          We built this to eliminate lunch queues for students. We take your privacy seriously — this policy
          explains exactly what we collect, why, and how it is protected.
        </div>

        <h2>1. Who We Are</h2>
        <p>CanteenRush is operated by <strong>Arnav Narula</strong>, a student founder incubated at the <strong>Christ University Incubation Cell, Bangalore, India</strong>.</p>
        <p>Contact: <strong>arnavnarula25@gmail.com</strong></p>

        <h2>2. Information We Collect</h2>
        <div className="card">
          <strong>Account Information</strong>
          <ul>
            <li>Full name and college email address (used for login and campus verification)</li>
            <li>Phone number (optional, used for order notifications)</li>
            <li>Firebase Authentication UID (anonymous identifier for session management)</li>
          </ul>
        </div>
        <div className="card">
          <strong>Order &amp; Transaction Data</strong>
          <ul>
            <li>Items ordered, quantities, timestamps, and order status</li>
            <li>Payment confirmation reference from Razorpay (we never store card numbers, CVV, UPI PINs, or bank credentials — all payment processing is handled entirely by Razorpay)</li>
            <li>Pickup QR code tokens (auto-expire within 4 hours)</li>
          </ul>
        </div>
        <div className="card">
          <strong>Device &amp; Usage Data</strong>
          <ul>
            <li>Firebase Cloud Messaging token (to send push notifications when your food is ready)</li>
            <li>Device OS type and app version (for crash diagnostics only)</li>
            <li>Approximate campus location (not precise GPS — only to identify your institution)</li>
          </ul>
        </div>

        <h2>3. What We Do NOT Collect</h2>
        <ul>
          <li>We do <strong>not</strong> track your real-time GPS location</li>
          <li>We do <strong>not</strong> store payment card details, UPI PINs, or bank account numbers</li>
          <li>We do <strong>not</strong> sell, rent, or share your data with advertisers</li>
          <li>We do <strong>not</strong> read your contacts, photos, or files</li>
          <li>We do <strong>not</strong> use your data for profiling or targeted advertising</li>
        </ul>

        <h2>4. How We Use Your Information</h2>
        <ul>
          <li>To process and fulfil your canteen orders</li>
          <li>To send push notifications when your food is ready for pickup</li>
          <li>To generate and verify your one-time QR pickup code</li>
          <li>To show you your order history within the app</li>
          <li>To allow canteen vendors to see and prepare your order</li>
          <li>To improve app performance and fix bugs</li>
        </ul>

        <h2>5. Payment Processing</h2>
        <p>All payments are processed securely by <strong>Razorpay</strong> (razorpay.com), a PCI-DSS compliant payment gateway. When you pay in the app, you interact directly with Razorpay&apos;s secure checkout. CanteenRush receives only a payment confirmation — we never see or store your card details, UPI credentials, or bank information.</p>
        <p>Razorpay privacy policy: <a href="https://razorpay.com/privacy/" target="_blank" rel="noopener noreferrer">razorpay.com/privacy</a></p>

        <h2>6. Data Sharing</h2>
        <p>We share your information only in these limited cases:</p>
        <ul>
          <li><strong>Canteen vendors on your campus</strong> — they see your order details (items, pickup code) to prepare your food. They do not see your email or payment details.</li>
          <li><strong>Razorpay</strong> — for payment processing as described above.</li>
          <li><strong>Firebase (Google)</strong> — for authentication and push notifications.</li>
          <li><strong>Legal obligations</strong> — if required by Indian law or court order.</li>
        </ul>
        <p>We do not share your data with any other third party.</p>

        <h2>7. Data Storage &amp; Security</h2>
        <ul>
          <li>Your data is stored in a secure PostgreSQL database hosted on <strong>Neon</strong> (cloud-hosted, encrypted at rest)</li>
          <li>All data in transit is encrypted via HTTPS / TLS 1.3</li>
          <li>QR pickup tokens are cryptographically signed (JWT) and expire automatically</li>
          <li>Access to the database is restricted to application servers only — no public access</li>
        </ul>

        <h2>8. Data Retention</h2>
        <ul>
          <li>Order history is retained for <strong>12 months</strong> to support disputes and records</li>
          <li>Account data is retained while your account is active</li>
          <li>QR tokens auto-delete after expiry (within 4 hours of generation)</li>
          <li>You can request deletion of your account and data at any time (see Section 9)</li>
        </ul>

        <h2>9. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li><strong>Access</strong> — request a copy of the personal data we hold about you</li>
          <li><strong>Correction</strong> — ask us to correct inaccurate data</li>
          <li><strong>Deletion</strong> — request deletion of your account and associated data</li>
          <li><strong>Withdrawal of consent</strong> — you can disable push notifications at any time via your device settings</li>
        </ul>
        <p>To exercise any of these rights, email <strong>arnavnarula25@gmail.com</strong> with the subject line &quot;Data Request&quot;. We will respond within 7 business days.</p>

        <h2>10. Children&apos;s Privacy</h2>
        <p>CanteenRush is intended for use by college students aged 18 and above. We do not knowingly collect data from anyone under 18. If you believe a minor has registered, please contact us immediately for account removal.</p>

        <h2>11. Changes to This Policy</h2>
        <p>We may update this policy as the app evolves. When we do, we will update the &quot;Last Updated&quot; date at the top of this page and notify you via a push notification if the changes are significant. Continued use of the app after changes means you accept the updated policy.</p>

        <h2>12. Cookies &amp; Tracking</h2>
        <p>The CanteenRush mobile app does not use cookies. The vendor web dashboard (used only by canteen staff) uses session cookies strictly for authentication — no tracking or advertising cookies are used.</p>

        <div className="contact-box">
          <h3>📬 Contact Us</h3>
          <p>For any privacy questions, data requests, or concerns, reach out to:</p>
          <p style={{ marginTop: '8px' }}>
            <strong>Arnav Narula</strong> — Founder, CanteenRush<br />
            Email: <a href="mailto:arnavnarula25@gmail.com">arnavnarula25@gmail.com</a><br />
            Christ University Incubation Cell, Bangalore, India
          </p>
        </div>
      </div>
      <footer>
        © 2026 CanteenRush · Christ University Incubation Cell, Bangalore · All rights reserved
      </footer>
    </>
  );
}
