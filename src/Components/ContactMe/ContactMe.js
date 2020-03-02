import React, { useState } from "react";
import MenuButton from "../MenuButton";
import useFormValidation from "../../Hooks/useFormValidation/useFormValidation";
import axios from "axios";
import "./contactMe.css";
import { MdSend } from "react-icons/md";
import useLoadingEffect from "../../Hooks/useLoadingEffects/useLoadingEffects";

const INITIAL_STATE = {
	name: "",
	email: "",
	message: ""
};

const ContactMe = () => {
	const [formCompletion, setFormCompletion] = useState({
		wasCompleted: false,
		errorMessage: ""
	});

	const {
		handleSubmit,
		handleChange,
		handleBlur,
		values,
		errors,
		isSubmitting
	} = useFormValidation(INITIAL_STATE, sendMail);
	const el = useLoadingEffect("fade");

	function sendMail() {
		axios
			.post("http://localhost:3030/api/email", {
				name: values.name,
				email: values.email,
				message: values.message
			})
			.then(res => {
				if (res.status === 200) {
					setFormCompletion({
						wasCompleted: true,
						errorMessage: ""
					});
					setTimeout(() => {
						setFormCompletion({
							wasCompleted: false,
							errorMessage: ""
						});
					}, 5000);
				}
			})
			.catch(err => {
				console.log("Error: ", err);
				setFormCompletion({
					wasCompleted: false,
					errorMessage: "Email not sent. Server Error"
				});
			});
	}

	return (
		<div className="contact-me-page" ref={el}>
			<MenuButton />
			<h1>Contact Me</h1>
			<form onSubmit={handleSubmit}>
				<div className="input-container">
					<label htmlFor="name">Name:</label>

					<input
						name="name"
						type=""
						value={values.name}
						onChange={handleChange}
						onBlur={handleBlur}
						className={errors.name && "error"}
					/>
					{errors.name && <p className="error-message">{errors.name}</p>}
				</div>
				<div className="input-container">
					<label htmlFor="email">Email:</label>

					<input
						name="email"
						type=""
						value={values.email}
						onChange={handleChange}
						onBlur={handleBlur}
						className={errors.email && "error"}
					/>
					{errors.email && <p className="error-message">{errors.email}</p>}
				</div>
				<div className="input-container">
					<label htmlFor="message">Message:</label>

					<textarea
						name="message"
						value={values.message}
						onChange={handleChange}
						onBlur={handleBlur}
						className={errors.message && "error"}
					/>
					{errors.message && <p className="error-message">{errors.message}</p>}
				</div>
				<div className="button-container">
					<div className="completion-message-container">
						{formCompletion.wasCompleted && (
							<p className="submitted">Email Sent</p>
						)}
						{formCompletion.errorMessage && (
							<p className="not-submitted">{formCompletion.errorMessage}</p>
						)}
					</div>
					<button
						name="submit"
						disabled={isSubmitting}
						className="send-button"
						type="submit"
						onClick={handleSubmit}
					>
						{" "}
						<MdSend fill="white" />{" "}
					</button>
				</div>
			</form>
		</div>
	);
};

export default ContactMe;
