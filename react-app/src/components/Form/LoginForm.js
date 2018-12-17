import React, {useState} from 'react';
import FormWrapper from "./FormWrapper";
import TextField from "./TextField";
import FormButton from "./FormButton";
import {API} from '../API/config';
import {useRedux} from "../../index";


const LoginForm = ({history}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);

    const [user, dispatch] = useRedux('user');

    const submitAction = (event) => {
        event.preventDefault();
        setIsSending(true);
        setErrors({});
        API.post('auth/login', {email, password})
            .then((response) => {
                dispatch.login(response.data.meta.token);
            })
            .catch((error) => {
                setErrors(error.response.data.errors);
            })
            .then(() => {
                setIsSending(false);
            });
    };

    return (
        <FormWrapper title="Login form" subtitle="Please fill the form to login" isSending={isSending}>
            <TextField label="email"
                       placeholder="enter email..."
                       value={email}
                       updateAction={setEmail}
                       error={errors.email}
            />
            <TextField label="password"
                       placeholder="enter password..."
                       value={password}
                       updateAction={setPassword}
                       error={errors.password}
            />
            <div className="field is-grouped">
                <FormButton name="Submit" action={submitAction}/>
                <FormButton name="Reset" action={submitAction} format="is-default"/>
            </div>
        </FormWrapper>
    )
};

export default LoginForm;