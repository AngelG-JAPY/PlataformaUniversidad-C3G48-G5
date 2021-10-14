import httpClient from "./httpClient";

const END_POINT = "/api/send-mail";

const enviarCorreo = (mensaje) => {
    const obj = {
        "msg": mensaje,
    };
    return httpClient.post(END_POINT, obj);
};

export {
    enviarCorreo
}