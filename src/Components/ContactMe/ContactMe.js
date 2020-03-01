import React, { useState } from "react";
import MenuButton from "../MenuButton";
import axios from "axios";
import "./contactMe.css";
import { MdSend } from "react-icons/md";
import useLoadingEffect from "../../Hooks/useLoadingEffects/useLoadingEffects";

const ContactMe = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const el = useLoadingEffect("fade");

	const handleSubmit = event => {
		event.preventDefault();

		axios
			.post("http://localhost:3030/api/email", { name, email, message })
			.then(res => {
				setName("");
				setEmail("");
				setMessage("");
			})
			.catch(err => {
				console.log("Error: ", err);
			});
	};

	return (
		<div className="contact-me-page" ref={el}>
			<MenuButton />
			<h1>Contact Me</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Name:</label>
					<br />
					<input
						id="name"
						type=""
						value={name}
						onChange={e => setName(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="email">Email:</label>
					<br />
					<input
						id="email"
						type=""
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="message">Message:</label>
					<br />
					<textarea
						id="message"
						value={message}
						onChange={e => setMessage(e.target.value)}
					/>
				</div>
				<div className="button-container">
					<button className="send-button" type="submit" onClick={handleSubmit}>
						{" "}
						<MdSend fill="white" />{" "}
					</button>
				</div>
			</form>
		</div>
	);
};

export default ContactMe;
