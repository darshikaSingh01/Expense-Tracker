import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Login.module.css";
const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (input.email !== "" && input.password !== "") {
      const loggeduser = JSON.parse(localStorage.getItem("user"));
      if (
        input.email === loggeduser.email &&
        input.password === loggeduser.password
      ) {
        localStorage.setItem("loggedin", true);
        navigate("/home");
      } else {
        alert("Wrong email or password");
      }
    } else {
      alert("Please fill all the information");
    }
  };

  return (
    <div className={styles.logInContainer} onSubmit={handleLogin}>
      <h2 className={styles.logInHeading}>LOGIN</h2>
      <form className={styles.logInForm}>
        <input
          className={styles.formInputs}
          name="email"
          value={input.email}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          type="email"
          id="emailId"
        />
        <br />
        <label htmlFor="emailId">Your Email</label>
        <br />

        <input
          className={styles.formInputs}
          name="password"
          value={input.password}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          type="password"
          id="pwd"
        />
        <br />
        <label htmlFor="pwd">Password</label>
        <br />

        <button className={`btn btn-success ${styles.logInBtn}`}>
          Sign In
        </button>
      </form>

      <div className={styles.registerHere}>
        <p>Don't have an account?</p>
        <Link to="/register">Register here</Link>
      </div>
    </div>
  );
};

export default Login;
