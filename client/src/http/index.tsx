import axios from "axios";

const $host = axios.create({baseURL: 'http://localhost:4949/api'});

export {
    $host
}