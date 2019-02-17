import {useEffect} from 'react';
import useForm from "./useForm";
import {useRedux} from "../../index";
import _isEqual from 'lodash.isequal';

const useReduxForm = (submitAction) => {
    const [user, dispatch] = useRedux('user');
    const form = useForm(submitAction);

    useEffect(() => {
        console.log('form fields changed');
        dispatch.saveForm(form.fields);
    }, [form.fields]);

    useEffect(() => {
        if(!_isEqual(user.form, form.fields) && form.isInitialized){
            console.log('equal')
            //form.setFields(user.form);
        } else {
            console.log('not equal')
        }
    },[user.form]);

    return form;
};

export default useReduxForm;