import React, { createContext, useContext, useState } from "react";
import { ClipLoader } from "react-spinners";

const SpinnerContext = createContext();

export const SpinnerProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <SpinnerContext.Provider value={{ loading, setLoading }}>
      {children}
    </SpinnerContext.Provider>
  );
};

export const useSpinner = () => {
  const context = useContext(SpinnerContext);
  if (!context) {
    throw new Error(
      "useSpinner debe ser utilizado dentro de un SpinnerProvider"
    );
  }
  return context;
};

export const Spinner = ({ color = "#123abc", size = 150 }) => {
  const { loading } = useSpinner();
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 9999,
  };

  return (
    loading && (
      <div style={override}>
        <ClipLoader
          color={color}
          loading={loading}
          size={size}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    )
  );
};
