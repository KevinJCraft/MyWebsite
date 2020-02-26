import React, { useState } from "react";
import MenuButton from "./MenuButton";
import "../CSS/contact-me-page.css";
import useLoadingEffect from "../Hooks/useLoadingEffects/useLoadingEffects";

const ContactMe = () => {
	const [nameText, setNameText] = useState("");
	const [emailText, setEmailText] = useState("");
	const [messageText, setMessageText] = useState("");
	const el = useLoadingEffect("fade");

	return (
		<div className="contact-me-page" ref={el}>
			<MenuButton />
			<h1>Contact Me</h1>
			<form>
				<div>
					<label htmlFor="name">Name:</label>
					<br />
					<input
						id="name"
						type="text"
						value={nameText}
						onChange={e => setNameText(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="email">Email:</label>
					<br />
					<input
						id="email"
						type="text"
						value={emailText}
						onChange={e => setEmailText(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="message">Message:</label>
					<br />
					<textarea
						id="message"
						value={messageText}
						onChange={e => setMessageText(e.target.value)}
					/>
				</div>
				<input type="submit" />
			</form>
		</div>
	);
};

export default ContactMe;
