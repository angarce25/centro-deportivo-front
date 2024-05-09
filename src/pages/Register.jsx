import Registercomponent from '../components/forms/Registercomponent'
import React, { useState } from "react";
import Logincomponent from "../components/forms/Logincomponent"

const Register = () => {
    const [currentForm, setCurrentForm] = useState('Logincomponent');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        <Registercomponent onFormSwitch={toggleForm} />
      }
    </div>
  );

}

export default Register