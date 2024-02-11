import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import  "../Login/styles.css"
import { useNavigate } from "react-router-dom";


const Login = () => {
	const [data, setData] = useState({ username: "", password: "" });
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://127.0.0.1:3000/signin";
			const response = await axios.post(url, data);
			const { token } = response.data;
			localStorage.setItem('username', response.data.username);

			localStorage.setItem("token",token);
			navigate("/home")
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

return (
<div className="login_container">
<div className="login_form_container">
<div className="left">
<form className="form_container" onSubmit={handleSubmit}>
<h1>Login to Your Account</h1>	
<input
type="text"
placeholder="username"
name="username"
onChange={handleChange}
value={data.username}
required
className="input"
/>
<input
type="password"
placeholder="Password"
name="password"
onChange={handleChange}
value={data.password}
required
className="input"
/>
{error && <div className="error_msg">{error}</div>}
<button type="submit" className="red_btn">
Sign In
</button>
</form>
</div>
<div className="right">
<h1>New Here ?</h1>
<Link to="/signup">
<button type="button" className="white_btn">
Sign Up
</button>
</Link>
</div>
</div>
</div>
);
};

export default Login;