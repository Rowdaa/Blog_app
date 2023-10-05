import { Link } from "react-router-dom";
import "./register.css";

function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>User Name</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Please Enter Your username"
        />

        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Please Enter Your Email"
        />
        <label>Password</label>
        <input
          type="Password"
          className="LoginInput"
          placeholder="Please Enter Your password"
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
}

export default Register;
