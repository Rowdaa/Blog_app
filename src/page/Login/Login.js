import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <span className="LoginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          type="text"
          className="LoginInput"
          placeholder="Please Enter Your Email"
        />
        <label>Password</label>
        <input
          type="Password"
          className="LoginInput"
          placeholder="Please Enter Your password"
        />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">
        {" "}
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}

export default Login;
