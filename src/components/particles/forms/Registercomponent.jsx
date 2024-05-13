<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm, Controller } from 'react-hook-form';

export const Registercomponent = (props) => {
  const { control, handleSubmit, formState: { errors }, register } = useForm();
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
  const [file, setFile] = useState(null); // Estado para almacenar el archivo seleccionado
  const [termsAccepted, setTermsAccepted] = useState(false); // Estado para almacenar si los términos han sido aceptados
=======
<<<<<<<< HEAD:src/components/forms/Registercomponent.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from 'react-google-recaptcha';


export const Registercomponent = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
>>>>>>> 8b210d732cb5c90998b75b6022b22b3f826ae820
  const navigate = useNavigate();

  const onChange = (value) => {
    // Si el valor del reCAPTCHA es válido, establecer el estado isRecaptchaVerified en true
    setIsRecaptchaVerified(!!value);
  }

<<<<<<< HEAD
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    // Validar el tipo de archivo
    if (selectedFile && (selectedFile.type === 'application/pdf' || selectedFile.type === 'image/png' || selectedFile.type === 'image/jpeg')) {
      setFile(selectedFile);
    } else {
      alert("Por favor, selecciona un archivo PDF, PNG o JPG.");
    }
  };
  const handleTermsChange = () => {
    setTermsAccepted(!termsAccepted);
  };

  const onSubmit = (data) => {
=======
  const handleSubmit = (e) => {
    e.preventDefault();

>>>>>>> 8b210d732cb5c90998b75b6022b22b3f826ae820
    // Verificar si el reCAPTCHA se ha verificado
    if (!isRecaptchaVerified) {
      alert("Por favor, verifica que no eres un robot.");
      return;
    }

<<<<<<< HEAD
     // Verificar si los términos y condiciones han sido aceptados
     if (!termsAccepted) {
      alert("Debes aceptar los términos y condiciones.");
      return;
    }

    // Resto del código para el envío del formulario
    console.log(data);
    console.log("Archivo adjunto:", file); // Aquí puedes enviar el archivo al servidor si es necesario
=======
    // Resto del código para el envío del formulario
    console.log(email);
>>>>>>> 8b210d732cb5c90998b75b6022b22b3f826ae820
    setTimeout(() => {
      alert("Registrado con éxito");
      // Redirige a la página de inicio después de la alerta
      navigate("/");
    }, 0);
<<<<<<< HEAD
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center mt-8 mb-8">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md" style={{ backgroundColor: "#F2F2F2" }}>
        <h2 className="text-3xl font-semibold text-center mb-6">Regístrate</h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          
          <div className="flex flex-col items-center">
            <label htmlFor="name" className="block mb-1 font-bold"></label>
            <Controller
              control={control}
              name="name"
              rules={{ 
                required: "Campo obligatorio", 
                maxLength: { value: 80, message: "Máximo 80 caracteres" }, 
                pattern: { value: /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/, message: "Solo letras y espacios" } 
              }}
              render={({ field }) => <input {...field} type="text" placeholder="Nombre" className="input-style w-full max-w-md" style={{ borderRadius: "5px" }} />}
            />
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="lastName" className="block mb-1 font-bold"></label>
            <Controller
              control={control}
              name="lastName"
              rules={{ 
                required: "Campo obligatorio", 
                maxLength: { value: 80, message: "Máximo 80 caracteres" }, 
                pattern: { value: /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/, message: "Solo letras y espacios" } 
              }}
              render={({ field }) => <input {...field} type="text" placeholder="Apellido" className="input-style w-full max-w-md" style={{ borderRadius: "5px" }} />}
            />
            {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="email" className="block mb-1 font-bold"></label>
            <Controller
              control={control}
              name="email"
              rules={{ required: "Campo obligatorio", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email inválido" } }}
              render={({ field }) => <input {...field} type="email" placeholder="E-mail" className="input-style w-full max-w-md" style={{ borderRadius: "5px" }} />}
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="password" className="block mb-1 font-bold"></label>
            <Controller
              control={control}
              name="password"
              rules={{ 
                required: "Campo obligatorio", 
                minLength: { value: 6, message: "Mínimo 6 caracteres" }, 
                pattern: { 
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, 
                  message: "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial (@$!%*?&)" 
                } 
              }}
              render={({ field }) => <input {...field} type="password" placeholder="Contraseña" className="input-style w-full max-w-md" style={{ borderRadius: "5px" }} />}
            />
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="phone" className="block mb-1 font-bold"></label>
            <Controller
              control={control}
              name="phone"
              rules={{ required: "Campo obligatorio", minLength: { value: 9, message: "Debe tener 9 caracteres" }, maxLength: { value: 9, message: "Debe tener 9 caracteres" }, pattern: { value: /^[0-9]+$/, message: "Solo números" } }}
              render={({ field }) => <input {...field} type="tel" placeholder="Teléfono" className="input-style w-full max-w-md" style={{ borderRadius: "5px" }} />}
            />
            {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
          </div>
          {/* <div className="flex flex-col items-center">
            <label htmlFor="location" className="block mb-1 font-bold"></label>
            <select 
              {...register("location", { required: "Campo obligatorio" })}
              className="input-style w-full max-w-md"
              style={{ borderRadius: "5px" }}
            >
              <option value="">Opción de recogida del carnet:</option>
              <option value="Campo">Campo</option>
              <option value="Bar El Pilar">Bar El Pilar</option>
              <option value="Herbolario Herbosalud">Herbolario Herbosalud</option>
              <option value="Integrante del Club">Integrante del Club</option>
            </select>
            {errors.location && <span className="text-red-500">{errors.location.message}</span>}
          </div> */}
          <div className="flex flex-col items-center">
            <label htmlFor="observations" className="block mb-1 font-bold"></label>
            <textarea 
              {...register("observations")}
              placeholder="Añade tus anotaciones aquí..."
              className="input-style w-full max-w-md"
              style={{ borderRadius: "5px", minHeight: "100px" }}
            />
          </div>
          
          {/* Campo para seleccionar archivo */}
          {/* <div className="flex flex-col items-center">
            <label htmlFor="document" className="block mb-1 "></label>
            <input
              type="file"
              id="document"
              accept=".pdf,.png,.jpg"
              onChange={handleFileChange}
              className="input-style w-full max-w-md"
              style={{ borderRadius: "5px" }}
            />
         
          </div> */}
          <div className="flex justify-center">
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={handleTermsChange}
              className="mr-2"
            />
            <label htmlFor="terms" className="text-sm">
              He leído y acepto los términos y condiciones.
            </label>
          </div>
          <div className="recaptcha flex flex-col items-center"> 
            <ReCAPTCHA
              sitekey="6LehndkpAAAAAMU_fxlWNvfsHRJa8ujEY4hb_lMU"
              onChange={onChange}
            />
          </div>
          
          <div className="flex justify-center">
            <button className="button-register bg-custom-blue hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Aceptar</button>
          </div>
          
=======
  }

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md" style={{ backgroundColor: "#F2F2F2" }}>
        <h2 className="text-3xl font-semibold text-center mb-6">Regístrate</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col items-center">
            <label htmlFor="name" className="block mb-1 font-bold">Nombre</label>
            <input 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              type="text" 
              placeholder="Nombre" 
              id="name" 
              name="name" 
              minLength="8" 
              maxLength="20" 
              required 
              className="input-style w-full max-w-md" 
              style={{ borderRadius: "5px" }} 
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="email" className="block mb-1 font-bold">Email</label>
            <input 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              type="email" 
              placeholder="tuemail@aaaaa.com" 
              id="email" 
              name="email" 
              required 
              className="input-style w-full max-w-md" 
              style={{ borderRadius: "5px" }} 
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="password" className="block mb-1 font-bold">Contraseña</label>
            <input 
              value={pass} 
              onChange={(e) => setPass(e.target.value)} 
              type="password" 
              placeholder="********" 
              id="password" 
              name="password" 
              minLength="8" 
              required 
              className="input-style w-full max-w-md" 
              style={{ borderRadius: "5px" }} 
            />
          </div>
          <div className="recaptcha flex flex-col items-center"> {/* Se centra el reCAPTCHA */}
            <ReCAPTCHA
              sitekey="6Lc22VkpAAAAAGk5Cfhs87A96VBhP3qnK-2OTKUL"
              onChange={onChange}
            />
          </div>
          <div className="flex justify-center"> {/* Se centra el botón */}
            <button className="button-register bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Aceptar</button>
          </div>
>>>>>>> 8b210d732cb5c90998b75b6022b22b3f826ae820
        </form>
      </div>
    </div>
  );
}

export default Registercomponent;
<<<<<<< HEAD
=======

========
=======
>>>>>>> ed6a75f40b97adfe404d2c4f1f6312adfc502678
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from 'react-google-recaptcha';

export const Registercomponent = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
  const navigate = useNavigate();

  const onChange = (value) => {
    // Si el valor del reCAPTCHA es válido, establecer el estado isRecaptchaVerified en true
    setIsRecaptchaVerified(!!value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar si el reCAPTCHA se ha verificado
    if (!isRecaptchaVerified) {
      alert("Por favor, verifica que no eres un robot.");
      return;
    }

    // Resto del código para el envío del formulario
    console.log(email);
    setTimeout(() => {
      alert("Registrado con éxito");
      // Redirige a la página de inicio después de la alerta
      navigate("/");
    }, 0);
  }

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md" style={{ backgroundColor: "#F2F2F2" }}>
        <h2 className="text-3xl font-semibold text-center mb-6">Regístrate</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col items-center">
            <label htmlFor="name" className="block mb-1 font-bold">Nombre</label>
            <input 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              type="text" 
              placeholder="Nombre" 
              id="name" 
              name="name" 
              minLength="8" 
              maxLength="20" 
              required 
              className="input-style w-full max-w-md" 
              style={{ borderRadius: "5px" }} 
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="email" className="block mb-1 font-bold">Email</label>
            <input 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              type="email" 
              placeholder="tuemail@aaaaa.com" 
              id="email" 
              name="email" 
              required 
              className="input-style w-full max-w-md" 
              style={{ borderRadius: "5px" }} 
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="password" className="block mb-1 font-bold">Contraseña</label>
            <input 
              value={pass} 
              onChange={(e) => setPass(e.target.value)} 
              type="password" 
              placeholder="********" 
              id="password" 
              name="password" 
              minLength="8" 
              required 
              className="input-style w-full max-w-md" 
              style={{ borderRadius: "5px" }} 
            />
          </div>
          <div className="recaptcha flex flex-col items-center"> {/* Se centra el reCAPTCHA */}
            <ReCAPTCHA
              sitekey="6Lc22VkpAAAAAGk5Cfhs87A96VBhP3qnK-2OTKUL"
              onChange={onChange}
            />
          </div>
          <div className="flex justify-center"> {/* Se centra el botón */}
            <button className="button-register bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Aceptar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registercomponent;

<<<<<<< HEAD
>>>>>>>> 8b210d732cb5c90998b75b6022b22b3f826ae820:src/components/particles/forms/Registercomponent.jsx
>>>>>>> 8b210d732cb5c90998b75b6022b22b3f826ae820
=======
>>>>>>> ed6a75f40b97adfe404d2c4f1f6312adfc502678
