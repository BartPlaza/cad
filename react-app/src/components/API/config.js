import axios from 'axios';
import {logout, setToken} from "../../store/actions/user";

export const API = axios.create({
    baseURL: 'http://laravel/api/',
});

const configureApi = (store) => {
    API.interceptors.request.use((request) => {
        const token = store.getState().user.token;
        if (token) {
            request.headers.Autyhorization = 'Bearer ' + token;
        }
        return request;
    });

    API.interceptors.response.use((response) => {
        const token = response.headers.authorization;
        if(token){
            store.dispatch(setToken(token.split(' ').pop()));
        }
        return response;
    }, (error) => {
        //handleErrors(error);
        return Promise.reject(error)
    });

};

const handleErrors = (error) => {
};



const forceLoginAgain = () => {
    logout();
    window.location.href = '/login'
};

export default configureApi;