import React, {useState, useEffect} from 'react';
import Canvas from "../Canvas";
import {useRedux} from "../../..";
import generatePoint from "../generators/generatePoint";
import generateLine from "../generators/generateLine";
import useCurrentPoint from "../hooks/useCurrentPoint";

const lineTool = () => {

    const [, dispatch] = useRedux('canvas');
    const [tempLine, setTempLine] = useState(null);
    const [startPoint, setStartPoint] = useState(null);
    const currentPoint = useCurrentPoint();

    const handleClick = (event) => {
        event.persist();
        if (startPoint) {
            const end = currentPoint ? currentPoint : generatePoint(event.nativeEvent.layerX, event.nativeEvent.layerY);
            dispatch.addPoint(startPoint);
            dispatch.addPoint(end);
            const line = generateLine(startPoint, end);
            dispatch.addLine(line);
            setStartPoint(null);
            setTempLine(null);
        } else {
            setStartPoint(currentPoint ? currentPoint : generatePoint(event.nativeEvent.layerX, event.nativeEvent.layerY));
        }
    };

    const mouseMove = (event) => {
        const x = event.nativeEvent.layerX;
        const y = event.nativeEvent.layerY;

        if (startPoint) {
            const end = currentPoint ? currentPoint : generatePoint(x, y);
            const line = generateLine(startPoint, end);
            setTempLine(line);
        }
    };

    const keyAction = (event) => {
        if (event.keyCode === 27 && startPoint) {
            setStartPoint(null);
            setTempLine(null);
        }
    };

    return (
        <Canvas
            currentPoint={currentPoint}
            tempLine={tempLine}
            clickHandler={handleClick}
            keyHandler={keyAction}
            mouseMoveHandler={mouseMove}/>
    )
};

export default lineTool;