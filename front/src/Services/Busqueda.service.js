import httpClient from "./httpClient";

const END_POINT = "/api/busquedas";

const getAllUniversidades = () => httpClient.get(END_POINT);

export { getAllUniversidades };
