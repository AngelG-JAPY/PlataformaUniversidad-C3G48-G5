  
import httpClient from "./httpClient";

const END_POINT = "/api/authenticate";

const validateUser = (correo, contraseña) => {
    const user = {
        "correo": correo,
        "contraseña": contraseña
    };
    return httpClient.post(END_POINT, user);
};

export {
    validateUser
}
