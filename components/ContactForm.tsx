"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
	const [state, handleSubmit] = useForm("mkobazzy");

	if (state.succeeded) {
		return (
			<div className="contact-success">
				<span className="success-icon">✓</span>
				<p>Message sent successfully! I'll get back to you soon.</p>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="contact-form">
			<div className="form-group">
				<label htmlFor="email">
					<span className="label-prefix">{">"}</span>
					Email Address
				</label>
				<input
					id="email"
					type="email"
					name="email"
					placeholder="your@email.com"
					required
				/>
				<ValidationError
					prefix="Email"
					field="email"
					errors={state.errors}
					className="form-error"
				/>
			</div>

			<div className="form-group">
				<label htmlFor="message">
					<span className="label-prefix">{">"}</span>
					Message
				</label>
				<textarea
					id="message"
					name="message"
					placeholder="Type your message here..."
					required
				/>
				<ValidationError
					prefix="Message"
					field="message"
					errors={state.errors}
					className="form-error"
				/>
			</div>

			<button type="submit" disabled={state.submitting}>
				{state.submitting ? "Sending..." : "Send Message"}
			</button>
		</form>
	);
}

export default ContactForm;
