import { useState } from "react";

// Create React App only inlines variables prefixed with REACT_APP_, so this is
// the only name that can ever reach the browser bundle. Deployed builds need it
// set in the hosting provider's project settings — a local .env file is not
// committed and therefore never reaches the build server.
const FORMSPREE_ENDPOINT = process.env.REACT_APP_FORMSPREE_ENDPOINT;

export default function ContactMe() {
    // idle | submitting | success | error | unconfigured
    const [status, setStatus] = useState("idle");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!FORMSPREE_ENDPOINT) {
            console.error(
                "Contact form is not configured: REACT_APP_FORMSPREE_ENDPOINT is missing from this build. " +
                    "Set it in .env for local development, and in the hosting provider's environment variables for deployments. " +
                    "Note that the REACT_APP_ prefix is required — any other name is stripped from the bundle."
            );
            setStatus("unconfigured");
            return;
        }

        setStatus("submitting");

        const form = e.target;
        const formData = new FormData(form);

        // Anti-spam honeypot check: if filled, abort gracefully
        if (formData.get("_gotcha")) {
            setStatus("success");
            form.reset();
            return;
        }

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                // Formspree explains rejections in the response body (a disabled
                // form, reCAPTCHA blocking AJAX, quota reached). Surface it so a
                // failure is diagnosable instead of a silent generic error.
                let detail = "";
                try {
                    const payload = await response.json();
                    detail = payload?.error || JSON.stringify(payload);
                } catch {
                    detail = "(no JSON body in response)";
                }
                console.error(
                    `Contact form submission rejected — HTTP ${response.status}: ${detail}`
                );
                setStatus("error");
            }
        } catch (err) {
            console.error("Contact form submission failed to reach the server:", err);
            setStatus("error");
        }
    };

    return (
    <section id="Contact" className="contact--section">
        <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
            Have a question or opportunity you'd like to discuss? Fill out the form below and I'll get back to you as soon as possible.
        </p>
        </div>
        <form className="contact--form--container" onSubmit={handleSubmit}>
        {/* Anti-spam honeypot field (hidden from real users) */}
        <input
            type="text"
            name="_gotcha"
            style={{ display: "none" }}
            tabIndex="-1"
            autoComplete="off"
        />
        <div className="container">
            <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
                type="text"
                className="contact--input text-md"
                name="first-name"
                id="first-name"
                maxLength={50}
                required
            />
            </label>
            <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
                type="text"
                className="contact--input text-md"
                name="last-name"
                id="last-name"
                maxLength={50}
                required
            />
            </label>
            <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
                type="email"
                className="contact--input text-md"
                name="email"
                id="email"
                maxLength={100}
                required
            />
            </label>
            <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
                type="tel"
                className="contact--input text-md"
                name="phone-number"
                id="phone-number"
                maxLength={25}
                required
            />
            </label>
        </div>
        <label htmlFor="choose-topic" className="contact--label">
            <span className="text-md">Choose a topic</span>
            <select id="choose-topic" name="topic" className="contact--input text-md" required defaultValue="">
            <option value="" disabled>Select One...</option>
            <option>Internship/Co-op Opportunity</option>
            <option>Collaboration</option>
            <option>General Inquiry</option>
            <option>Other</option>
            </select>
        </label>
        <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            maxLength={3000}
            placeholder="Type your message..."
            required
            />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
            <input type="checkbox" required name="checkbox" id="checkbox" />
            <span className="text-sm">I accept the terms</span>
        </label>
        <div>
            <button
            type="submit"
            className="btn btn-primary contact--form--btn"
            disabled={status === "submitting"}
            >
            {status === "submitting" ? "Sending..." : "Submit"}
            </button>
        </div>
        <div role="status" aria-live="polite">
            {status === "success" && (
            <p className="text-md" style={{ color: "#006B6A" }}>
                Thanks for reaching out! I'll get back to you soon.
            </p>
            )}
            {status === "error" && (
            <p className="text-md" style={{ color: "#c0392b" }}>
                Something went wrong. Please try again, or reach me through the
                links in the footer.
            </p>
            )}
            {status === "unconfigured" && (
            <p className="text-md" style={{ color: "#c0392b" }}>
                This form isn't accepting messages right now. Please reach me
                through the links in the footer.
            </p>
            )}
        </div>
        </form>
    </section>
    );
}