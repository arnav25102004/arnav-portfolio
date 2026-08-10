export const metadata = {
  title: "Delete Your Data — Urban Hub",
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
  ul, ol { margin: 8px 0 14px 20px; }
  li { margin-bottom: 8px; font-size: 15px; color: #333; }
  .card {
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    padding: 20px 24px;
    margin: 16px 0;
  }
  .card strong { color: #111; }
  .steps {
    background: #f0fdf4;
    border: 1px solid #bbf7d0;
    border-radius: 10px;
    padding: 20px 24px;
    margin: 16px 0;
  }
  .steps ol { margin-left: 20px; }
  .steps li { margin-bottom: 10px; }
  .steps li strong { color: #15803d; }
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
  .pill-deleted { background: #fee2e2; color: #b91c1c; }
  .pill-kept { background: #fff7ed; color: #b45309; }
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

export default function DeleteAccountPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <header>
        <h1>🗑️ Delete Your Urban Hub Account &amp; Data</h1>
        <p>Urban Hub (developer: Arnav Narula) · Last updated August 8, 2026</p>
      </header>
      <div className="container">
        <div className="intro">
          This page explains how to request deletion of your Urban Hub account and
          the personal data associated with it — whether or not you still have the
          app installed.
        </div>

        <h2>How to request deletion</h2>
        <p>You can request deletion in either of two ways:</p>

        <div className="steps">
          <h3 style={{ marginTop: 0 }}>Option A — In the app (fastest)</h3>
          <ol>
            <li><strong>Open Urban Hub</strong> and sign in.</li>
            <li>Go to <strong>More → Delete Account</strong> (near the bottom, below Sign Out).</li>
            <li>Read the warning screen, then tap <strong>Continue</strong>.</li>
            <li>Verify your identity with a one-time code sent to your registered phone number (or your PIN, if you&apos;ve set one).</li>
            <li>Type <strong>DELETE</strong> to confirm, then tap <strong>Delete My Account</strong>.</li>
          </ol>
          <p style={{ marginBottom: 0 }}>Your account is deleted immediately — no waiting period.</p>
        </div>

        <div className="steps">
          <h3 style={{ marginTop: 0 }}>Option B — Without the app</h3>
          <ol>
            <li>Email <strong>arnavnarula25@gmail.com</strong> from the email address or phone number associated with your account, with the subject line <strong>&quot;Delete My Account&quot;</strong>.</li>
            <li>Include your registered phone number and, if known, your society name and flat number, so we can locate your account.</li>
            <li>We verify the request and delete your account within <strong>7 days</strong>.</li>
          </ol>
        </div>

        <h2>What gets deleted vs. what&apos;s kept</h2>
        <p>
          Deleting your account permanently erases your name, phone number, email,
          PIN, and login sessions, and deactivates your society membership. Records
          your account was involved in (complaints raised, visitor entries, bills)
          are kept for the society&apos;s operational and legal record-keeping, but
          once your identifying details are erased, they can no longer be traced
          back to you.
        </p>
        <table>
          <thead>
            <tr><th>Data</th><th>What happens</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Name, phone number, email, profile photo</td>
              <td><span className="pill pill-deleted">Deleted</span> — permanently erased, not recoverable</td>
            </tr>
            <tr>
              <td>PIN (hashed)</td>
              <td><span className="pill pill-deleted">Deleted</span></td>
            </tr>
            <tr>
              <td>Push notification token</td>
              <td><span className="pill pill-deleted">Deleted</span></td>
            </tr>
            <tr>
              <td>Device sessions / login history</td>
              <td><span className="pill pill-deleted">Deleted</span></td>
            </tr>
            <tr>
              <td>Consent records</td>
              <td><span className="pill pill-deleted">Revoked and marked deleted</span></td>
            </tr>
            <tr>
              <td>Society membership</td>
              <td><span className="pill pill-deleted">Deactivated</span> — you lose access to all societies you belonged to</td>
            </tr>
            <tr>
              <td>Complaints, visitor records, marketplace listings you created</td>
              <td><span className="pill pill-kept">Retained, de-identified</span> — kept for the society&apos;s operational records, but since your name, phone number, and email are erased, they can no longer be traced back to you as an individual</td>
            </tr>
            <tr>
              <td>Payment / maintenance bill records</td>
              <td><span className="pill pill-kept">Retained, de-identified</span> — kept as required by Indian financial record-keeping law, with the same de-identification as above</td>
            </tr>
          </tbody>
        </table>

        <div className="card">
          <p style={{ marginBottom: 0 }}>
            <strong>Retention period:</strong> Your name, phone number, email, and
            PIN are erased immediately upon account deletion (in-app) or within 7
            days (email request). Financial/operational records (bills, payments,
            complaints, visitor logs) are retained only as long as required by
            applicable law, and can no longer be traced back to you once your
            identifying details are erased.
          </p>
        </div>

        <h2>Deleting your account is permanent</h2>
        <p>
          Once deleted, your account cannot be recovered. If you rejoin a society
          later, you&apos;ll need to create a new account and go through your
          society&apos;s approval process again.
        </p>

        <div className="contact-box">
          <h3>📬 Questions about this process?</h3>
          <p style={{ marginBottom: '8px' }}>
            <strong>Arnav Narula</strong> (Urban Hub developer)<br />
            Email: <a href="mailto:arnavnarula25@gmail.com">arnavnarula25@gmail.com</a>
          </p>
          <p style={{ marginBottom: 0 }}>
            See also our full <a href="/SocietyHub/Privacy" style={{ color: '#fff', textDecoration: 'underline' }}>Privacy Policy</a>.
          </p>
        </div>
      </div>
      <footer>
        © 2026 Urban Hub · All rights reserved
      </footer>
    </>
  );
}
