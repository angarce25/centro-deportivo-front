import  { useState, useEffect } from "react";
import Registercomponent from "../components/forms/Registercomponent";
import Logincomponent from "../components/forms/Logincomponent"; // Asegúrate de importar el componente Logincomponent
import { useSpinner, Spinner } from "../context/LoadingContext";
import Header from "../components/home/Header";
import './BgRegister.css';

const Register = () => {
  const [currentForm, setCurrentForm] = useState("RegisterComponent");
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
    <div className="bgRegister">
      <Header/>
      {loading ? (
        <Spinner /> // Muestra el spinner mientras loading es true
      ) : (
        currentForm === "RegisterComponent" ? (
          <Registercomponent onFormSwitch={toggleForm} />
        ) : (
          <Logincomponent onFormSwitch={toggleForm} />
        )
      )}
    </div>
  );
};

export default Register;
