import React, { useState } from "react";
import Registercomponent from "../components/forms/Registercomponent";
import Header from "../components/Home/Header";

const Register = () => {
  const [currentForm, setCurrentForm] = useState("RegisterComponent");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      <header/>
      {currentForm === "RegisterComponent" ? (
        <Registercomponent onFormSwitch={toggleForm} />
      ) : (
        <Logincomponent onFormSwitch={toggleForm} />
      )}
    </div>
  );
};

export default Register;

