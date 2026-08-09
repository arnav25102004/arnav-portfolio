export const metadata = {
  title: "Privacy Policy — SocietyHub",
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
    background: #1A73E8;
    color: white;
    padding: 40px 24px 32px;
  }
  header h1 { font-size: 28px; font-weight: 700; margin-bottom: 4px; }
  header p { font-size: 14px; opacity: 0.85; }
  .container { max-width: 780px; margin: 0 auto; padding: 40px 24px 80px; }
  .intro {
    background: #e8f0fe;
    border-left: 4px solid #1A73E8;
    padding: 16px 20px;
    border-radius: 0 8px 8px 0;
    margin-bottom: 36px;
    font-size: 15px;
    color: #0d3d80;
  }
  h2 {
    font-size: 18px;
    font-weight: 700;
    color: #1A73E8;
    margin: 36px 0 12px;
    padding-bottom: 6px;
    border-bottom: 1px solid #c9dcfa;
  }
  h3 { font-size: 15px; font-weight: 700; color: #111; margin: 20px 0 8px; }
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
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 16px 0;
    font-size: 14px;
  }
  th {
    text-align: left;
    background: #f3f4f6;
    padding: 10px 12px;
    font-weight: 700;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;
  }
  td {
    padding: 10px 12px;
    border-bottom: 1px solid #f0f0f0;
    color: #333;
    vertical-align: top;
  }
  .pill {
    display: inline-block;
    font-size: 12px;
    font-weight: 700;
    padding: 2px 9px;
    border-radius: 999px;
  }
  .pill-required { background: #e6f4ea; color: #1e7e34; }
  .pill-optional { background: #fff7ed; color: #b45309; }
  .pill-cosmetic { background: #f3f4f6; color: #6b7280; }
  .role-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 12px;
    margin: 16px 0;
  }
  .role-card {
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    padding: 14px 16px;
  }
  .role-card h4 { font-size: 14px; font-weight: 700; color: #111; margin-bottom: 4px; }
  .role-card p { font-size: 13px; color: #555; margin-bottom: 0; }
  .contact-box {
    background: #1A73E8;
    color: white;
    border-radius: 12px;
    padding: 24px 28px;
    margin-top: 40px;
  }
  .contact-box h3 { color: white; font-size: 17px; margin-bottom: 10px; }
  .contact-box a { color: white; font-weight: 600; }
  footer {
    text-align: center;
    padding: 24px;
    font-size: 13px;
    color: #9ca3af;
    border-top: 1px solid #f3f4f6;
  }
`;

export default function SocietyHubPrivacyPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <header>
        <h1>🏘️ SocietyHub</h1>
        <p>Privacy Policy &amp; App Permissions · Effective Date: August 8, 2026</p>
      </header>
      <div className="container">
        <div className="intro">
          SocietyHub is a resident management app used by housing societies to run visitor
          approval, complaints, maintenance billing, and announcements. We collect only what
          each feature needs to function — nothing here is sold or used for advertising.
        </div>

        <h2>1. Who We Are</h2>
        <p>SocietyHub is operated by <strong>Arnav Narula</strong>, based in Bangalore, India.</p>
        <p>Contact: <strong>arnavnarula25@gmail.com</strong></p>

        <h2>2. Information We Collect</h2>
        <h3>When you create an account</h3>
        <div className="card">
          <ul>
            <li>Phone number, verified by SMS OTP — this is your login identity. Stored encrypted at rest.</li>
            <li>Name and, optionally, a profile photo and email address.</li>
            <li>Flat number and role within your society (owner, tenant, committee, guard, or admin).</li>
            <li>A 4–6 digit app PIN (stored as a salted hash — we never see or store the PIN itself).</li>
          </ul>
        </div>
        <h3>When you use the app</h3>
        <div className="card">
          <ul>
            <li><strong>Visitor approvals</strong> — a photo taken by the gate guard, the visitor&apos;s name, phone number (optional), and purpose of visit.</li>
            <li><strong>Complaints</strong> — text description, category, optional photos or a voice note you attach.</li>
            <li><strong>Maintenance bills</strong> — amounts due and payment status, recorded by your committee. SocietyHub does not process card or bank details; payments are made directly to your committee outside the app in this version.</li>
            <li><strong>Announcements</strong> — read receipts, so committees know who has seen important notices.</li>
            <li><strong>Push notification token</strong> — a device identifier from Apple/Google used only to deliver alerts (visitor at gate, complaint updates, announcements).</li>
          </ul>
        </div>
        <h3>Automatically</h3>
        <div className="card">
          <ul>
            <li>Device type and OS version, IP address, and app crash diagnostics — used to keep the app working and secure your account.</li>
            <li>Login timestamps and device sessions, so you can see and revoke access from unfamiliar devices.</li>
          </ul>
        </div>

        <h2>3. App Permissions</h2>
        <p>Exactly what the Android and iOS builds request. Denying a permission disables that feature only — the rest of the app still works.</p>
        <table>
          <thead>
            <tr><th>Permission</th><th>Platform</th><th>Used for</th><th>Required?</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Camera</td>
              <td>Android &amp; iOS</td>
              <td>Guards photograph visitors at entry; residents attach photos to complaints.</td>
              <td><span className="pill pill-optional">Optional</span></td>
            </tr>
            <tr>
              <td>Photo library</td>
              <td>Android &amp; iOS</td>
              <td>Attaching an existing photo to a complaint or marketplace listing.</td>
              <td><span className="pill pill-optional">Optional</span></td>
            </tr>
            <tr>
              <td>Notifications</td>
              <td>Android &amp; iOS</td>
              <td>Visitor-at-gate alerts, complaint status changes, announcements, SOS alerts.</td>
              <td><span className="pill pill-optional">Optional</span></td>
            </tr>
            <tr>
              <td>Internet / network state</td>
              <td>Android</td>
              <td>Every feature of the app requires connectivity to our servers.</td>
              <td><span className="pill pill-required">Required</span></td>
            </tr>
            <tr>
              <td>Vibrate</td>
              <td>Android</td>
              <td>Haptic feedback on the visitor ring-to-approve alert.</td>
              <td><span className="pill pill-cosmetic">Cosmetic</span></td>
            </tr>
            <tr>
              <td>Receive boot completed</td>
              <td>Android</td>
              <td>Re-registers the device for push notifications after a phone restart.</td>
              <td><span className="pill pill-cosmetic">Cosmetic</span></td>
            </tr>
          </tbody>
        </table>
        <p><strong>We do not request:</strong> location, contacts, microphone (voice notes use the system audio recorder UI, not a background mic permission), SMS read access, or call logs.</p>

        <h2>4. Data by Role</h2>
        <p>What&apos;s visible depends on your role in the society — not everyone sees everything.</p>
        <div className="role-grid">
          <div className="role-card">
            <h4>Resident (owner / tenant)</h4>
            <p>Sees their own complaints, bills, and visitors. Approves or rejects visitors for their own flat only.</p>
          </div>
          <div className="role-card">
            <h4>Committee / admin</h4>
            <p>Sees society-wide complaints, bills, and visitor logs. Cannot see PINs or raw payment credentials — there are none stored.</p>
          </div>
          <div className="role-card">
            <h4>Guard</h4>
            <p>Registers visitors and photographs them at entry. Cannot see resident complaints, bills, or announcements.</p>
          </div>
        </div>

        <h2>5. What We Do NOT Collect</h2>
        <ul>
          <li>We do <strong>not</strong> track your real-time GPS location</li>
          <li>We do <strong>not</strong> store payment card details, UPI PINs, or bank account numbers</li>
          <li>We do <strong>not</strong> sell, rent, or share your data with advertisers</li>
          <li>We do <strong>not</strong> read your contacts, photos, or files beyond what you explicitly attach</li>
          <li>We do <strong>not</strong> use your data for profiling or targeted advertising</li>
        </ul>

        <h2>6. Third-Party Services</h2>
        <table>
          <thead>
            <tr><th>Service</th><th>Purpose</th><th>What they receive</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Fast2SMS</td>
              <td>Delivering login OTP codes</td>
              <td>Your phone number and a one-time code, per login</td>
            </tr>
            <tr>
              <td>Apple / Google push services</td>
              <td>Delivering notifications</td>
              <td>A device push token, not message content beyond the notification text</td>
            </tr>
            <tr>
              <td>Cloud file storage</td>
              <td>Storing visitor and complaint photos</td>
              <td>Uploaded images, via short-lived signed links — never public URLs</td>
            </tr>
          </tbody>
        </table>
        <p>We do not sell personal data, and we do not share it with advertisers.</p>

        <h2>7. Data Storage &amp; Security</h2>
        <ul>
          <li>Phone numbers and visitor phone numbers are encrypted at rest</li>
          <li>PINs are never stored in plain text — only a salted hash</li>
          <li>Sessions use short-lived access tokens (15 minutes) with rotating refresh tokens; a stolen refresh token is detected and the whole session family is revoked</li>
          <li>Sensitive actions (like recording a payment) require re-entering your PIN, even if you&apos;re already logged in</li>
          <li>You can view and sign out of active device sessions from within the app at any time</li>
        </ul>

        <h2>8. Data Retention</h2>
        <ul>
          <li>Visitor photos are automatically deleted <strong>30 days</strong> after upload</li>
          <li>Account data is retained while your society membership is active, plus a limited window after removal for dispute resolution</li>
          <li>You can request full account deletion by contacting your committee admin or emailing us directly</li>
        </ul>

        <h2>9. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li><strong>Access</strong> — request a copy of the personal data we hold about you</li>
          <li><strong>Correction</strong> — ask us to correct inaccurate data</li>
          <li><strong>Deletion</strong> — request deletion of your account and associated data</li>
        </ul>
        <p>To exercise any of these rights, contact your society&apos;s committee admin or email <strong>arnavnarula25@gmail.com</strong> with the subject line &quot;Data Request&quot;. We respond within 30 days.</p>

        <h2>10. Children&apos;s Privacy</h2>
        <p>SocietyHub is intended for adult residents, committee members, and staff of housing societies. We do not knowingly collect data from children under 18.</p>

        <h2>11. Changes to This Policy</h2>
        <p>If this policy changes materially, we&apos;ll notify residents via an in-app announcement before the change takes effect. The effective date at the top of this page always reflects the current version.</p>

        <div className="contact-box">
          <h3>📬 Contact Us</h3>
          <p>For any privacy questions, data requests, or concerns, reach out to:</p>
          <p style={{ marginTop: '8px' }}>
            <strong>Arnav Narula</strong><br />
            Email: <a href="mailto:arnavnarula25@gmail.com">arnavnarula25@gmail.com</a><br />
            Bangalore, India
          </p>
        </div>
      </div>
      <footer>
        © 2026 SocietyHub · All rights reserved
      </footer>
    </>
  );
}
