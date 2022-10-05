import { root } from "./config";
import axios from "axios";

export const api = Object.freeze({
    users: {
        fetch: () => {
            return axios(`${root}`);
        }
    },
});