import validation from "../Validation/Validation";

import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = (props) => {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <div className={styles.mainContainer}>
      <form onSubmit={handleSubmit}>
        <h2>Log in</h2>
        <div>
          <img src="src\assets\imgs\favicon.png" alt="" />
        </div>

        <label>Email:</label>
        <input
          placeholder="your@mail.here"
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        {errors.email ? <p className={styles.errors}>{errors.email}</p> : null}
        <label>Password:</label>
        <input
          placeholder="y0uR_pA5Sw0rd"
          type="text"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <p className={styles.errors}>
            {errors.password ? errors.password : null}
          </p>
        )}

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
