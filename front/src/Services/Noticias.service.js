import httpClient from "./httpClient";

const ENDPOINT = "/api/noticias";

const getALLNoticias = () => httpClient.get(ENDPOINT);

export {
    getALLNoticias
    
}