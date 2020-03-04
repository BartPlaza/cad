import React, {useState, useEffect, useRef} from 'react';
import getMousePosition, {MousePosition} from "../helpers/getMousePosition";
import {Point} from "../generators/generatePoint";
import {useSelector} from "react-redux";
import {GlobalState} from "../../../store/reducer";

const useCurrentPoint = () => {
    const [currentPoint, setCurrentPoint] = useState<Point | null>(null);
    const points: Point[] = useSelector((state: GlobalState) => state.canvas.points);
    const pointsRef = useRef<Point[]>(points);

    useEffect(() => {
        //@ts-ignore
        document.addEventListener('mousemove', checkCurrentPoint);
        //@ts-ignore
        return () => document.removeEventListener('mousemove', checkCurrentPoint);
    }, []);

    useEffect(() => {
        pointsRef.current = points;
    }, [points]);


    function isInPointArea(mousePosition: MousePosition, point: Point): boolean {
        return (Math.abs(point.x - mousePosition.x) < 10) && (Math.abs(point.y - mousePosition.y) < 10);
    }

    const checkCurrentPoint = (event: React.MouseEvent) => {
        //@ts-ignore
        const mousePosition = getMousePosition(event.layerX, event.layerY);
        const currentPoint = pointsRef.current.find((point) => isInPointArea(mousePosition, point));
        setCurrentPoint(currentPoint || null);
    };

    return currentPoint;
};

export default useCurrentPoint;