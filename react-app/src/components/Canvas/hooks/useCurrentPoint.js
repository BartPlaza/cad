import {useState, useEffect} from 'react';
import {useRedux} from "../../../index";
import {getScale} from "../../../store/reducers/canvas";

const useCurrentPoint = () => {
    const [currentPoint, setCurrentPoint] = useState(null);
    const [canvasState,] = useRedux('canvas');

    useEffect(() => {
        document.addEventListener('mousemove', checkCurrentPoint);
        return () => document.removeEventListener('mousemove', checkCurrentPoint);
    }, [canvasState]);


    const checkCurrentPoint = (event) => {
        const scale = getScale(canvasState);
        const x = event.layerX / scale;
        const y = event.layerY / scale;
        let isSet = false;

        canvasState.points.forEach((point) => {
            if (Math.abs(point.x - x) < (10 / scale) && Math.abs(point.y - y) < (10 / scale)) {
                isSet = true;
                setCurrentPoint((prevCurrentPoint) => {
                    return (prevCurrentPoint && prevCurrentPoint.id === point.id) ? prevCurrentPoint : point;
                });
            }
        });

        if (!isSet) {
            setCurrentPoint(null);
        }
    };

    return currentPoint;
};

export default useCurrentPoint;