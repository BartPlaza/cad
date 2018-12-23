import axios from 'axios';
import {logout, setToken} from "../../store/actions/user";

export const API = axios.create({
    baseURL: 'http://laravel/api/',
});

const configureApi = (store) => {
    API.interceptors.request.use((request) => {
        const token = store.getState().user.token;
        if (token) {
            request.headers.Authorization = 'Bearer ' + token;
        }
        return request;
    });

    API.interceptors.response.use((response) => {
        const tokenHeader = response.headers.authorization;
        const extractToken = (tokenHeader) => tokenHeader.split(' ').pop();

        if (tokenHeader) {
            const token = extractToken(tokenHeader);
            store.dispatch(setToken(token));
        }
        return response;
    }, (error) => {

        if (error.response.status === 401) {
            store.dispatch(logout());
        }
        return Promise.reject(error)
    });
};

export default configureApi;