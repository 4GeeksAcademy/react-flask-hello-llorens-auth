import React from "react";
import { useNavigate } from "react-router-dom";

export const Completado = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token"); 
        navigate("/");
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Has iniciado sesión correctamente</h1>
            <button
                onClick={handleLogout}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: "#007BFF",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Cerrar sesión
            </button>
        </div>
    );
};

export const Incorrecto = () => {
    return(
        <h1>No Has iniciado sesión correctamente</h1>
    )

}