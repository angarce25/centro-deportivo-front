import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm, Controller } from 'react-hook-form';
import TermsAndConditionsModal from '../termsAndConditions/Terms';
import { registerRequest } from '../../api/auth';

const Registercomponent = ({ onFormSwitch }) => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const onChange = (value) => setIsRecaptchaVerified(!!value);

  const handleTermsChange = () => setTermsAccepted(!termsAccepted);

  const onSubmit = async (data) => {
    console.log("Datos enviados al formulario:", data);
  
    if (!isRecaptchaVerified) {
      alert("Por favor, verifica que no eres un robot.");
      return;
    }
  
    if (!termsAccepted) {
      alert("Debes aceptar los términos y condiciones.");
      return;
    }
  
    try {
      const response = await registerRequest(data);
  
      if (response.status === 200) {
        alert("Registro exitoso");
        navigate("/login");
      } else {
        alert(response.data.message || "Error en el registro");
      }
    } catch (error) {
      console.error("Error en el registro:", error);
      alert("Error en el registro");
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md" style={{ backgroundColor: "#F2F2F2" }}>
        <h2 className="text-3xl font-semibold text-center mb-6">Regístrate</h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-center">
            <Controller
              control={control}
              name="name"
              rules={{ required: "Campo obligatorio", maxLength: 80, pattern: /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/ }}
              render={({ field }) => <input {...field} type="text" placeholder="Nombre" className="input-style w-full max-w-md" />}
            />
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
          </div>
          <div className="flex flex-col items-center">
            <Controller
              control={control}
              name="lastname"
              rules={{ required: "Campo obligatorio", maxLength: 80, pattern: /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/ }}
              render={({ field }) => <input {...field} type="text" placeholder="Apellido" className="input-style w-full max-w-md" />}
            />
            {errors.lastname && <span className="text-red-500">{errors.lastname.message}</span>}
          </div>
          <div className="flex flex-col items-center">
            <Controller
              control={control}
              name="email"
              rules={{ required: "Campo obligatorio", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }}
              render={({ field }) => <input {...field} type="email" placeholder="E-mail" className="input-style w-full max-w-md" />}
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>
          <div className="flex flex-col items-center">
            <Controller
              control={control}
              name="password"
              rules={{ required: "Campo obligatorio", minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/ }}
              render={({ field }) => <input {...field} type="password" placeholder="Contraseña" className="input-style w-full max-w-md" />}
            />
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
          </div>
          <div className="flex flex-col items-center">
            <Controller
              control={control}
              name="mobile"
              rules={{ required: "Campo obligatorio", minLength: 9, maxLength: 9, pattern: /^[0-9]+$/ }}
              render={({ field }) => <input {...field} type="tel" placeholder="Teléfono" className="input-style w-full max-w-md" />}
            />
            {errors.mobile && <span className="text-red-500">{errors.mobile.message}</span>}
          </div>
          
          <div className="flex justify-center">
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={handleTermsChange}
              className="mr-2"
            />
            <button type="button" onClick={openModal}>Términos y condiciones</button>
            <TermsAndConditionsModal isOpen={modalIsOpen} onClose={closeModal} />
          </div>
          <div className="recaptcha flex flex-col items-center"> 
            <ReCAPTCHA
              sitekey="6LehndkpAAAAAMU_fxlWNvfsHRJa8ujEY4hb_lMU"
              onChange={onChange}
            />
          </div>
          <div className="flex justify-center">
            <button className="button-register bg-custom-blue hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded" type="submit">Aceptar</button>
          </div>
        </form>
        <button 
          className="link-btn mt-4 text-center font-bold text-yellow-400 hover:text-yellow-500" 
          onClick={() => onFormSwitch("Logincomponent")} 
          style={{ color: "#142740", display: "block", margin: "0 auto" }}
        >
          <small>¿Ya tienes una cuenta? Inicia sesión aquí</small>
        </button>
      </div>
    </div>
  );
}

export default Registercomponent;
