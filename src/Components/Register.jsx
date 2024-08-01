import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Register.module.css";
const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  //to store value in local storage

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.username !== "" && input.email !== "" && input.password !== "") {
      localStorage.setItem("user", JSON.stringify(input));
      navigate("/login");
    } else {
      alert("Please fill all the information");
    }
  };

  return (
    <div className={styles.registerContainer}>
      <h2 className={styles.signUpHeading}>CREATE AN ACCOUNT</h2>
      <form className={styles.registerForm} onSubmit={handleSubmit}>
        <input
          className={styles.formInputs}
          name="username"
          value={input.username}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          type="text"
          id="username"
        />
        <br />
        <label htmlFor="username">Username</label>
        <br />

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

        <button className={`btn btn-success ${styles.signUpBtn}`}>
          Sign Up
        </button>
      </form>

      <div className={styles.loginHere}>
        <p>Have already an account?</p>
        <Link to="/login">Login here</Link>
      </div>
    </div>
  );
};

export default Register;
