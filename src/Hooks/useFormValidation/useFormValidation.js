import { useState, useEffect } from "react";
import validateForm from "./validateForm";

const useFormValidation = (initialState, submitAction) => {
	const [values, setValues] = useState(initialState);
	const [errors, setErrors] = useState({});
	const [isSubmitting, setSubmitting] = useState(false);

	useEffect(() => {
		console.log("why am I here", isSubmitting);
		if (isSubmitting) {
			const noErrors = Object.keys(errors).length === 0;
			if (noErrors) {
				submitAction();
				setValues({
					name: "",
					email: "",
					message: ""
				});
				setSubmitting(false);
			} else {
				setSubmitting(false);
			}
		}
	}, [errors]);

	const handleBlur = event => {
		let elName = event.target.name;
		const validationErrors = validateForm(values, errors, elName);
		setErrors(validationErrors);
	};

	const handleChange = event => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		});
	};

	const handleSubmit = event => {
		event.preventDefault();
		const validationErrors = validateForm(values, errors, "submit");
		setSubmitting(true);
		setErrors(validationErrors);
	};

	return {
		handleSubmit,
		handleChange,
		handleBlur,
		values,
		errors,
		isSubmitting
	};
};

export default useFormValidation;
