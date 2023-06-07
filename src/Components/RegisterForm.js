import React from 'react';
import { useEffect ,useState} from 'react';
import { useParams,useLocation } from 'react-router-dom';




function getFormValues() {
	const storedValues = localStorage.getItem('form');
	if (!storedValues)
		return {
			email: '',
			message: '',
			name: '',
			telephone: '',
		};
	return JSON.parse(storedValues);
}

const RegisterForm = (props) => {

    const location  = useLocation();
    const propsData = location.state;
    console.log(propsData)
    console.log(location)

    const {movId} = useParams()
    console.log(movId)
	const [values, setValues] = useState(getFormValues);

	useEffect(() => {
		localStorage.setItem('form', JSON.stringify(values));
	}, [values]);

	function handleSubmit(event) {
		event.preventDefault();
		alert('An error occurred on the server. Please try again!!!');
	}

	function handleChange(event) {
		setValues((previousValues) => ({
			...previousValues,
			[event.target.name]: event.target.value,
		}));
	}

	return (
		<main>
			<header>
				<h1>Please Fill in The Details For Movie: </h1>
			</header>
			<form className="form"onSubmit={handleSubmit}>
				<label htmlFor="name">
					Name
					<input
						autoComplete="off"
						type="text"
						name="name"
						id="name"
						placeholder="Mr. Rai"
						onChange={handleChange}
						value={values.name}
					/>
				</label>
				<label htmlFor="email">
					Email
					<input
						placeholder="e.g. user.email@domain.com"
						type="email"
						name="email"
						id="email"
						onChange={handleChange}
						value={values.email}
					/>
				</label>
				<label htmlFor="telephone">
					Telephone
					<input
						type="text"
						placeholder="e.g. +91 9090878798"
						name="telephone"
						id="telephone"
						onChange={handleChange}
						value={values.telephone}
					/>
				</label>
				<button type="submit">Submit</button>
			</form>
		</main>
	);
}

export default RegisterForm;