const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		token: null,
		message: null, // Puedes eliminar este campo si no lo utilizas
	  },
	  actions: {
		login: async (email, password) => {
		  try {
			const resp = await fetch(process.env.BACKEND_URL + "/api/token", {
			  method: "POST",
			  headers: {
				"Content-Type": "application/json",
			  },
			  body: JSON.stringify({ email, password }),
			});
  
			if (resp.ok) {
			  const data = await resp.json();
			  setStore({ token: data.token });
			  return true;
			} else {
			  console.error("Error en la autenticación");
			  return false;
			}
		  } catch (error) {
			console.error("Error en la solicitud de inicio de sesión", error);
			return false;
		  }
		},
  
		register: async (email, password) => {
		  try {
			const resp = await fetch(process.env.BACKEND_URL + "/api/register", {
			  method: "POST",
			  headers: {
				"Content-Type": "application/json",
			  },
			  body: JSON.stringify({ email, password }),
			});
  
			if (resp.ok) {
			  console.log("Usuario registrado correctamente");
			  return true;
			} else {
			  console.error("Error al registrar el usuario");
			  return false;
			}
		  } catch (error) {
			console.error("Error en la solicitud de registro", error);
			return false;
		  }
		},
	  },
	};
  };
  
  export default getState;
  