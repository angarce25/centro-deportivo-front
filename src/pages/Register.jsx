import Registercomponent from '../components/forms/Registercomponent'
import React, { useState } from "react";


const Register = () => {
  const [currentForm, setCurrentForm] = useState("LoginComponent");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">{<Registercomponent onFormSwitch={toggleForm} />}</div>
  );
};

export default Register;
