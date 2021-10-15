import httpClient from "./httpClient";

const END_POINT = "/api/contacto";
const END_POINT2 = "/api/mostrarsms";

const crearContacto = (contacto) => httpClient.post(END_POINT, contacto);
const mostrarSms = () => httpClient.get(END_POINT2);

export { crearContacto, mostrarSms };
