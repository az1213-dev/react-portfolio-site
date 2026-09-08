import { render, screen, fireEvent, waitFor } from "@testing-library/react";

// The component reads the endpoint once at import time, so it has to be set first.
const ENDPOINT = "https://formspree.io/f/testform";
process.env.REACT_APP_FORMSPREE_ENDPOINT = ENDPOINT;
const ContactMe = require("./ContactMe").default;

const fillOutForm = () => {
	fireEvent.change(screen.getByLabelText(/first name/i), {
		target: { value: "Ada" },
	});
	fireEvent.change(screen.getByLabelText(/last name/i), {
		target: { value: "Lovelace" },
	});
	fireEvent.change(screen.getByLabelText(/email/i), {
		target: { value: "ada@example.com" },
	});
	fireEvent.change(screen.getByLabelText(/phone number/i), {
		target: { value: "5551234567" },
	});
	fireEvent.change(screen.getByLabelText(/choose a topic/i), {
		target: { value: "Collaboration" },
	});
	fireEvent.change(screen.getByLabelText(/message/i), {
		target: { value: "Hello there." },
	});
	fireEvent.click(screen.getByLabelText(/i accept the terms/i));
};

describe("ContactMe form submission", () => {
	afterEach(() => {
		delete global.fetch;
	});

	it("posts every field to the configured endpoint", async () => {
		global.fetch = jest.fn(() => Promise.resolve({ ok: true }));
		render(<ContactMe />);
		fillOutForm();
		fireEvent.click(screen.getByRole("button", { name: /submit/i }));

		await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

		const [url, options] = global.fetch.mock.calls[0];
		expect(url).toBe(ENDPOINT);
		expect(options.method).toBe("POST");

		const sent = Object.fromEntries(options.body.entries());
		expect(sent).toMatchObject({
			"first-name": "Ada",
			"last-name": "Lovelace",
			email: "ada@example.com",
			"phone-number": "5551234567",
			topic: "Collaboration",
			message: "Hello there.",
		});

		expect(
			await screen.findByText(/thanks for reaching out/i)
		).toBeInTheDocument();
	});

	it("surfaces an error and logs the server's reason when rejected", async () => {
		const consoleError = jest
			.spyOn(console, "error")
			.mockImplementation(() => {});
		global.fetch = jest.fn(() =>
			Promise.resolve({
				ok: false,
				status: 403,
				json: () =>
					Promise.resolve({ error: "reCAPTCHA must be disabled in settings" }),
			})
		);

		render(<ContactMe />);
		fillOutForm();
		fireEvent.click(screen.getByRole("button", { name: /submit/i }));

		expect(
			await screen.findByText(/something went wrong/i)
		).toBeInTheDocument();
		await waitFor(() =>
			expect(consoleError).toHaveBeenCalledWith(
				expect.stringContaining("reCAPTCHA must be disabled in settings")
			)
		);

		consoleError.mockRestore();
	});
});
