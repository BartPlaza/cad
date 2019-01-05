import {useEffect, useState} from 'react';
import usePrevious from "../../../hooks/usePrevious";
import {useRedux} from "../../../index";

const useScale = () => {
    const [canvasState, dispatch] = useRedux('canvas');
    const [scale, setScale] = useState(1);
    const prevScale = usePrevious(scale);

    useEffect(() => {
        setScale(canvasState.scale);
        document.addEventListener('wheel', zoomAction);
        return () => document.removeEventListener('wheel', zoomAction);
    }, []);

    useEffect(() => {
        dispatch.setScale(scale);
    }, [scale]);

    const zoomAction = (event) => {
        setScale((prevScale) => event.deltaY > 0 ? prevScale * 1.1 : prevScale / 1.1);
        //const zoom = Math.exp(wheel * 0.2);
    };

    return [prevScale, scale];
};

export default useScale;