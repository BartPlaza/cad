import { useState, useEffect } from 'react';

const useRedux = state => {
    const [data, setData] = useState(store.getState()[state]);

    useEffect(() => {
        store.subscribe(() => {
            setData(store.getState()[state]);
        });

        // Unsubscribe
        return store.subscribe(() => {});
    });

    return [data, actions[state]];
};

export default useRedux;