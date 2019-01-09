import {useEffect, useState} from 'react';
import usePrevious from "../../../hooks/usePrevious";
import {useRedux} from "../../../index";
import {getScale} from "../../../store/reducers/camera";

const useScale = () => {
    const [cameraState, dispatch] = useRedux('camera');
    const [scale, setScale] = useState(1);
    const prevScale = usePrevious(scale);

    useEffect(() => {
        setScale(getScale(cameraState));
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