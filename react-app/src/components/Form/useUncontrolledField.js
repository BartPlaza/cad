import React, {useState, useEffect, useRef} from 'react';

const useUncontrolledField = (form, name, defaultValue) => {

    const ref = useRef();
    const value = ref.current ? ref.current.value : null;

    useEffect(() => {
        console.log(ref.current.value);
    }, [value]);

    return {
        name: name,
        ref: ref,
        error: form.errors[name],
    };
};

export default useUncontrolledField;