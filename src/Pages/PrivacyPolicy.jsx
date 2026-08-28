import React from "react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="legal--page-wrapper">
      <div className="legal--container">
        <div className="legal--header">
          <Link to="/" className="legal--back-btn">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="legal--title">Privacy Policy</h1>
          <p className="legal--updated">Last Updated: August 2026</p>
        </div>

        <div className="legal--card">
          <section className="legal--section">
            <h2>1. Introduction</h2>
            <p>
              Welcome to my personal portfolio website. I am <strong>Antonio Zapata</strong>, and I am committed to protecting your personal information and respecting your privacy. This Privacy Policy outlines how I collect, use, and safeguard your information when you visit my site.
            </p>
          </section>

          <section className="legal--section">
            <h2>2. Information I Collect</h2>
            <p>
              I only collect information that is strictly necessary for communicating with you and ensuring the proper functioning of my website:
            </p>
            <ul>
              <li>
                <strong>Contact Form Data:</strong> When you reach out to me via my contact form, I collect the details you provide, including your first and last name, email address, phone number, chosen topic, and message content.
              </li>
              <li>
                <strong>Usage & Technical Information:</strong> Standard server logs and browser metrics (such as browser type, referring URLs, device type, and visit timestamps) may be automatically logged to help me monitor site stability and performance.
              </li>
            </ul>
          </section>

          <section className="legal--section">
            <h2>3. How I Use Your Information</h2>
            <p>The information I collect through my portfolio is utilized solely for:</p>
            <ul>
              <li>Responding directly to your inquiries, networking messages, and collaboration opportunities.</li>
              <li>Maintaining and optimizing the performance, security, and user experience of my website.</li>
              <li>Preventing spam, abuse, and malicious interactions.</li>
            </ul>
            <p>
              I do <strong>not</strong> sell, rent, or trade your personal data to any third parties or marketing agencies.
            </p>
          </section>

          <section className="legal--section">
            <h2>4. Cookies & Local Storage</h2>
            <p>
              My website uses minimal, essential cookies and local storage settings strictly required for basic functionality (such as remembering your preferences or theme settings). You can manage or disable cookies at any time through your browser settings or via the Cookies Settings button in my footer.
            </p>
          </section>

          <section className="legal--section">
            <h2>5. Third-Party Links & Services</h2>
            <p>
              My website contains links to external platforms such as my GitHub profile, LinkedIn, and live project demos (such as Tideway). Please be aware that I am not responsible for the privacy practices or content of external third-party sites. I encourage you to review the privacy policies of any third-party websites you visit.
            </p>
          </section>

          <section className="legal--section">
            <h2>6. Data Retention & Security</h2>
            <p>
              I retain contact inquiries only for as long as necessary to fulfill our communication. I implement industry-standard technical measures to protect your personal information against unauthorized access, loss, or misuse.
            </p>
          </section>

          <section className="legal--section">
            <h2>7. Your Privacy Rights</h2>
            <p>
              Depending on your location (including rights under GDPR and CCPA), you have the right to request access to the personal data I hold about you, request corrections, or request deletion of your information.
            </p>
          </section>

          <section className="legal--section">
            <h2>8. Contact Me</h2>
            <p>
              If you have any questions, concerns, or requests regarding my Privacy Policy, please reach out to me directly through my{" "}
              <Link to="/#Contact" className="legal--inline-link">
                Contact Form
              </Link>{" "}
              or connect with me on GitHub.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
