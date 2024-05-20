import React, { useState, useEffect } from "react";
import Registercomponent from "../components/forms/Registercomponent";
import Logincomponent from "../components/forms/Logincomponent";
import { useSpinner, Spinner } from "../context/LoadingContext";

const Login = () => {
  const [currentForm, setCurrentForm] = useState("Logincomponent");
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
      {!loading && (
        <>
          {currentForm === "Logincomponent" ? (
            <Logincomponent onFormSwitch={toggleForm} />
          ) : (
            <Registercomponent onFormSwitch={toggleForm} />
          )}
        </>
      )}
    </div>
  );
};

export default Login;
