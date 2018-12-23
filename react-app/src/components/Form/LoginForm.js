import React, {useState} from 'react';
import FormWrapper from "./Components/FormWrapper";
import TextField from "./Components/TextField";
import PasswordField from "./Components/PasswordField";
import FormButton from "./Components/FormButton";
import {API} from '../API/config';
import {useRedux} from "../../index";


const loginForm = ({history}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);

    const [, dispatch] = useRedux('user');

    const submitAction = (event) => {
        event.preventDefault();
        setIsSending(true);
        setErrors({});
        API.post('auth/login', {email, password})
            .then((response) => {
                dispatch.login(response.data);
                history.goBack();
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
            <PasswordField label="password"
                           placeholder="enter password..."
                           value={password}
                           updateAction={setPassword}
                           error={errors.password}
            />
            <div className="field is-grouped">
                <FormButton name="Submit" action={submitAction}/>
            </div>
        </FormWrapper>
    )
};

export default loginForm;