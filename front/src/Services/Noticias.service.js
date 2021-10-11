import httpClient from "./httpClient";

const END_POINT = "/api/noticias";

const getAllNoticias = () => httpClient.get(END_POINT);

export { getAllNoticias };
