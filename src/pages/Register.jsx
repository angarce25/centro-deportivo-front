import React, { useState, useEffect } from "react";
import Registercomponent from "../components/forms/Registercomponent";
import { useSpinner, Spinner } from "../context/LoadingContext";

const Register = () => {
  const [currentForm, setCurrentForm] = useState("LoginComponent");
  const { loading, setLoading } = useSpinner();

  useEffect(() => {
    setLoading(true); // Activa el spinner
    setTimeout(() => {
      setLoading(false); // Desactiva el spinner después de cierto tiempo (simulando carga)
    }, 1000);
  }, [setLoading]);

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      <Spinner /> {/* Asegúrate de incluir el Spinner aquí */}
      {!loading && <Registercomponent onFormSwitch={toggleForm} />}
    </div>
  );
};

export default Register;
