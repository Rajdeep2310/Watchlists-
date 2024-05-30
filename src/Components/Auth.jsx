import styles from "./Styles/Auth.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState("");
  const navigate =  useNavigate()
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const validateEmail = (email) => {
    // Very basic email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = (e) => {
    if (validateEmail(email)) {
      localStorage.setItem("email", email);
      navigate("/dashboard");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <>
      <div className={styles.containerEmail}>
        <h2 className={styles.headEmail}>Email Form</h2>
        <input
          className={styles.inputEmail}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button
          type="submit"
          className={styles.buttonEmail}
          onClick={handleSubmit}
          
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Auth;
