import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../Signup/styles.css";

const Signup = () => {
const [data, setData] = useState({
username: "",
password: "",
});
const [error, setError] = useState("");
const navigate = useNavigate();

const handleChange = ({ currentTarget: input }) => {
setData({ ...data, [input.name]: input.value });
};

const handleSubmit = async (e) => {
e.preventDefault();
try {
const url = "http://localhost:3000/Signup";
const { data: res } = await axios.post(url, data);
alert("user is Created")
navigate("/login");
console.log(res.message);
} catch (error) {
if (
error.response
) {
setError(error.response.data.message);
}
}
};

return (
<div className="signup_container">
<div className="signup_form_container">
<div className="left">
<h1>Welcome Back</h1>
<Link to="/login">
<button type="button" className="white_btn">
Sign in
</button>
</Link>
</div>
<div className="right">
<form className="form_container" onSubmit={handleSubmit}>
<h1>Create Account</h1>
<input
type="text"
placeholder="First Name"
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
<button type="submit" className="red_btn" >
Sign Up
</button>
</form>
</div>
</div>
</div>
);
};

export default Signup;