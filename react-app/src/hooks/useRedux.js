import { useState, useEffect } from 'react';

const useRedux = state => {
    const [data, setData] = useState(store.getState()[state]);

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setData(store.getState()[state]);
        });

        // Unsubscribe
        return unsubscribe();
    });

    return [data, actions[state]];
};

export default useRedux;