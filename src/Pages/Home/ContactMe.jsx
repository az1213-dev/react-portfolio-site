import { useState } from "react";

const FORMSPREE_ENDPOINT =
    process.env.REACT_APP_FORMSPREE_ENDPOINT ||
    process.env.APP_FORMSPREE_ENDPOINT;

export default function ContactMe() {
    const [status, setStatus] = useState("idle"); // idle | submitting | success | error

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!FORMSPREE_ENDPOINT) {
            console.error("Missing REACT_APP_FORMSPREE_ENDPOINT environment variable.");
            setStatus("error");
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
                setStatus("error");
            }
        } catch (err) {
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
        {status === "success" && (
            <p className="text-md" style={{ color: "#006B6A" }}>
            Thanks for reaching out! I'll get back to you soon.
            </p>
        )}
        {status === "error" && (
            <p className="text-md" style={{ color: "#c0392b" }}>
            Something went wrong. Please try again, or email me directly.
            </p>
        )}
        </form>
    </section>
    );
}