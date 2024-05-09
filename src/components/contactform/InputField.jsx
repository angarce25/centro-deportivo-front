import React from "react";

const InputField = ({ label, type, id, value, onChange }) => {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  );
};

export default InputField;