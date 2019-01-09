import {useState, useEffect} from 'react';
import {useRedux} from "../../../index";
import {getPan, getScale} from "../../../store/reducers/camera";
import getMousePosition from "../helpers/getMousePosition";
import getScaledValue from "../helpers/getScaledValue";

const useCurrentPoint = () => {
    const [currentPoint, setCurrentPoint] = useState(null);
    const [canvasState,] = useRedux('canvas');

    useEffect(() => {
        document.addEventListener('mousemove', checkCurrentPoint);
        return () => document.removeEventListener('mousemove', checkCurrentPoint);
    }, [canvasState]);


    const checkCurrentPoint = (event) => {
        const {x,y} = getMousePosition(event.layerX, event.layerY);
        let isSet = false;

        canvasState.points.forEach((point) => {
            if (Math.abs(point.x - x) < (getScaledValue(10)) && Math.abs(point.y - y) < (getScaledValue(10))) {
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