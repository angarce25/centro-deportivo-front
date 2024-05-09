import React from "react";

const TextAreaField = ({ label, id, value, onChange }) => {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  );
};

export default TextAreaField;