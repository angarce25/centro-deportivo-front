import Registercomponent from '../components/particles/forms/Registercomponent'
import React, { useState } from "react";
import Logincomponent from "../components/particles/forms/Logincomponent"

const Login = () => {
  const [currentForm, setCurrentForm] = useState("Logincomponent");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div>
      {currentForm === "Logincomponent" ? (
        <Logincomponent onFormSwitch={toggleForm} />
      ) : (
        <Registercomponent onFormSwitch={toggleForm} />
      )}
    </div>
  );
};

export default Login;
