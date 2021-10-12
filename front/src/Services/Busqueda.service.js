import httpClient from "./httpClient";

const END_POINT = "/api/busqueda";

const getAllUniversidades = () => httpClient.get(END_POINT);

export { getAllUniversidades };
