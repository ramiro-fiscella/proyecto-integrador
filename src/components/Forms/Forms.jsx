import React from "react";
import styles from "./Form/Form.module.css";

const Forms = () => {
  return (
    <div>
      <form>
        <label>Email:</label>
        <input type="text" />

        <label>Password:</label>
        <input type="text" />

        <hr />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Forms;
