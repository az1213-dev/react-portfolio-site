import React from "react";
import { Link } from "react-router-dom";

export default function TermsOfService() {
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
          <h1 className="legal--title">Terms of Service</h1>
          <p className="legal--updated">Last Updated: August 2026</p>
        </div>

        <div className="legal--card">
          <section className="legal--section">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using my personal portfolio website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please discontinue use of my website.
            </p>
          </section>

          <section className="legal--section">
            <h2>2. Intellectual Property & Portfolio Work</h2>
            <p>
              Unless otherwise indicated, all original text, graphic designs, UI components, brand assets, and creative content presented on this website are my property (<strong>Antonio Zapata</strong>).
            </p>
            <p>
              Code repositories and open-source projects featured on my portfolio (such as Tideway) are licensed under their respective open-source licenses (such as the MIT License) as specified in my GitHub repositories.
            </p>
          </section>

          <section className="legal--section">
            <h2>3. Acceptable Use Policy</h2>
            <p>You agree not to use my website for any unlawful or prohibited activities, including:</p>
            <ul>
              <li>Attempting to interfere with the proper functioning, security, or availability of my website.</li>
              <li>Sending automated spam or unsolicited promotional material through my contact form.</li>
              <li>Misrepresenting your identity or affiliation when contacting or interacting with me.</li>
            </ul>
          </section>

          <section className="legal--section">
            <h2>4. Project Demonstrations & Code Samples</h2>
            <p>
              The projects, live demos, and code samples provided on my website are shared for informational and portfolio demonstration purposes. While I strive to ensure accuracy and functionality, all demonstrations are provided "as is" without warranties of any kind.
            </p>
          </section>

          <section className="legal--section">
            <h2>5. Disclaimer of Warranties</h2>
            <p>
              My website and all related content are provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
          </section>

          <section className="legal--section">
            <h2>6. Limitation of Liability</h2>
            <p>
              In no event shall I (Antonio Zapata) be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use or inability to use my website, even if advised of the possibility of such damages.
            </p>
          </section>

          <section className="legal--section">
            <h2>7. External Links</h2>
            <p>
              My website contains links to external third-party platforms (such as GitHub, LinkedIn, or project documentation). I do not control, endorse, or assume responsibility for the content, privacy practices, or availability of external third-party websites.
            </p>
          </section>

          <section className="legal--section">
            <h2>8. Modifications to Terms</h2>
            <p>
              I reserve the right to revise or update these Terms of Service at any time without prior notice. Any modifications will become effective immediately upon posting to this page. Your continued use of my website after updates are posted constitutes your acceptance of the revised terms.
            </p>
          </section>

          <section className="legal--section">
            <h2>9. Contact Me</h2>
            <p>
              If you have any questions or concerns regarding these Terms of Service, please feel free to reach out to me via my{" "}
              <Link to="/#Contact" className="legal--inline-link">
                Contact Form
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
