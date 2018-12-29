import { useState, useEffect } from 'react';
import {useRedux} from "../../../index";

const useCurrentPoint = () => {
    const [currentPoint, setCurrentPoint] = useState(null);
    const [canvas,] = useRedux('canvas');

    useEffect(() => {
        document.addEventListener('mousemove', checkCurrentPoint);
        return () => document.removeEventListener('mousemove', checkCurrentPoint);
    },[canvas]);


    const checkCurrentPoint = (event) => {
        const x = event.layerX;
        const y = event.layerY;

        setCurrentPoint(null);
        canvas.points.forEach((point) => {
            if (Math.abs(point.x - x) < 10 && Math.abs(point.y - y) < 10) {
                setCurrentPoint(point);
            }
        });
    };

    return currentPoint;
};

export default useCurrentPoint;