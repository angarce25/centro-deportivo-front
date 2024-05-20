import React, { useState, useEffect } from "react";
import Sidebar from "../components/sideBar/SideBar.jsx";
import UsersTable from "../components/users/UsersTable.jsx";
import { ClipLoader } from "react-spinners"; // Importa ClipLoader

const UserP = () => {
  const [loading, setLoading] = useState(true); // Inicia con carga para mostrar el spinner

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Cambia a false para mostrar el contenido después de cierto tiempo (simulando la carga)
    }, 1000);
  }, []);

  const color = "#123abc"; // Color del spinner
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <>
      {loading && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 9999,
          }}
        >
          <ClipLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      <section
        style={{ display: "flex", visibility: loading ? "hidden" : "visible" }}
      >
        <Sidebar style={{ flex: "0 0 auto" }} />{" "}
        {/* Fija el Sidebar en la pantalla */}
        <div style={{ marginLeft: "20px" }}>
          {" "}
          {/* Ajusta el espacio entre el Sidebar y los nuevos componentes */}
          <UsersTable />
          {/* Aquí puedes añadir más componentes, como AddCategory, NewUser, UsersTable, etc. */}
        </div>
      </section>
    </>
  );
};

export default UserP;
