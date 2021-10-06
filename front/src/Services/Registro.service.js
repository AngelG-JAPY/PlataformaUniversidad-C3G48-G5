import httpClient from "./httpClient";

const END_POINT = "/api/users";

const insert = (user) => httpClient.post(END_POINT, user);

export {
    insert
}