import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm, Controller } from "react-hook-form";
import TermsAndConditionsModal from "../termsAndConditions/Terms";
import { registerRequest } from "../../context/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registercomponent = ({ onFormSwitch }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
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
      toast.error("Por favor, verifica que no eres un robot.");
      return;
    }

    if (!termsAccepted) {
      toast.error("Debes aceptar los términos y condiciones.");
      return;
    }

    try {
      const response = await registerRequest(data);

      if (response.status === 200) {
        toast.success("Registro exitoso");
        navigate("/login");
      } else {
        toast.error(response.data.message || "Error en el registro");
      }
    } catch (error) {
      console.error("Error en el registro:", error);
      toast.error("Error en el registro");
    }
  };

  const passwordValidation = {
    required: "Campo obligatorio",
    minLength: {
      value: 6,
      message: "La contraseña debe tener al menos 6 caracteres",
    },
    validate: {
      hasLowercase: (value) =>
        /[a-z]/.test(value) || "Debe contener al menos una letra minúscula",
      hasUppercase: (value) =>
        /[A-Z]/.test(value) || "Debe contener al menos una letra mayúscula",
      hasNumber: (value) =>
        /\d/.test(value) || "Debe contener al menos un número",
      hasSpecialChar: (value) =>
        /[@$!%?&]/.test(value) ||
        "Debe contener al menos un carácter especial (@$!%?&)",
    },
  };

  return (
    <div 
    style={{
      maxWidth: "100%",
      height: "auto",
      filter: "drop-shadow(10px 10px 12px rgba(90, 90, 0, 0.8))",
    }}
    className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div
        className="bg-white p-8 rounded shadow-md w-full max-w-md mb-12"
        style={{ backgroundColor: "#F2F2F2" }}
      >
        <h2 className="text-3xl font-semibold text-center mb-6">Regístrate</h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-center">
            <Controller
              control={control}
              name="name"
              rules={{
                required: "Campo obligatorio",
                maxLength: 80,
                pattern: /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/,
              }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Nombre"
                  className="input w-full max-w-xs"
                />
              )}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>
          <div className="flex flex-col items-center">
            <Controller
              control={control}
              name="lastname"
              rules={{
                required: "Campo obligatorio",
                maxLength: 80,
                pattern: /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/,
              }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Apellido"
                  className="input w-full max-w-xs"
                />
              )}
            />
            {errors.lastname && (
              <span className="text-red-500">{errors.lastname.message}</span>
            )}
          </div>
          <div className="flex flex-col items-center">
            <Controller
              control={control}
              name="email"
              rules={{
                required: "Campo obligatorio",
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              }}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  placeholder="E-mail"
                  className="input w-full max-w-xs"
                />
              )}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <div className="flex flex-col items-center">
            <Controller
              control={control}
              name="password"
              rules={passwordValidation}
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  placeholder="Contraseña"
                  className="input w-full max-w-xs"
                />
              )}
            />
            {errors.password && (
              <div className="text-red-500">
                {errors.password.message}
                {errors.password.type === "validate" &&
                  Object.values(errors.password.validate).map(
                    (error, index) => <div key={index}>{error}</div>
                  )}
              </div>
            )}
          </div>
          <div className="flex flex-col items-center">
            <Controller
              control={control}
              name="mobile"
              rules={{
                required: "Campo obligatorio",
                minLength: 9,
                maxLength: 9,
                pattern: /^[0-9]+$/,
              }}
              render={({ field }) => (
                <input
                  {...field}
                  type="tel"
                  placeholder="Teléfono"
                  className="input w-full max-w-xs"
                />
              )}
            />
            {errors.mobile && (
              <span className="text-red-500">{errors.mobile.message}</span>
            )}
          </div>

          <div className="flex justify-center">
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={handleTermsChange}
              className="mr-2"
            />
            <button
              type="button"
              className="text-sm text-gray-500 hover:text-gray-700 underline"
              onClick={openModal}
            >
              Términos y condiciones
            </button>
            <TermsAndConditionsModal
              isOpen={modalIsOpen}
              onClose={closeModal}
            />
          </div>
          <div className="recaptcha flex flex-col items-center">
            <ReCAPTCHA
              sitekey="6LehndkpAAAAAMU_fxlWNvfsHRJa8ujEY4hb_lMU"
              onChange={onChange}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="button-register bg-yellow-l hover:bg-yellow-d text-black font-semibold py-2 px-4 rounded"
              type="submit"
            >
              Aceptar
            </button>
          </div>
        </form>
        <button
          className="link-btn mt-4 text-center font-bold text-yellow-400 hover:text-yellow-500"
          onClick={() => onFormSwitch("Logincomponent")}
          style={{ color: "#142740", display: "block", margin: "0 auto" }}
        >
          <small className="hover:text-gray">
            ¿Ya tienes una cuenta? Inicia sesión aquí
          </small>
        </button>
      </div>
    </div>
  );
};

export default Registercomponent;
