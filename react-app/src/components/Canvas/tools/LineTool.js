import React, {useState, useEffect} from 'react';
import Canvas from "../Canvas";
import {useRedux} from "../../..";
import generatePoint from "../generators/generatePoint";
import generateLine from "../generators/generateLine";
import useCurrentPoint from "../hooks/useCurrentPoint";
import generateTempLine from "../generators/generateTempLine";

const lineTool = (props) => {

    const {isMultiline} = props;
    const [, dispatch] = useRedux('canvas');
    const [tempLines, setTempLines] = useState([]);
    const [tempPoints, setTempPoints] = useState([]);
    const [startPoint, setStartPoint] = useState(null);
    const currentPoint = useCurrentPoint();

    const handleClick = (event) => {
        event.persist();
        if (startPoint) {
            const endPoint = currentPoint ? currentPoint : generatePoint(event.nativeEvent.layerX, event.nativeEvent.layerY);
            if(startPoint.id !== endPoint.id){
                dispatch.addPoint(startPoint);
                dispatch.addPoint(endPoint);
                const line = generateLine(startPoint.id, endPoint.id);
                dispatch.addLine(line);
                setStartPoint(isMultiline ? endPoint : null);
                setTempLines([]);
            }
        } else {
            setStartPoint(currentPoint ? currentPoint : generatePoint(event.nativeEvent.layerX, event.nativeEvent.layerY));
        }
    };

    const mouseMove = (event) => {
        const x = event.nativeEvent.layerX;
        const y = event.nativeEvent.layerY;

        if (startPoint) {
            const end = currentPoint ? currentPoint : generatePoint(x, y);
            const tempLine = generateTempLine(startPoint, end);
            setTempLines([tempLine]);
        }
    };

    const keyAction = (event) => {
        if (event.keyCode === 27 && startPoint) {
            setStartPoint(null);
            setTempLines([]);
        }
    };

    return (
        <Canvas
            currentPoint={currentPoint}
            tempPoints={tempPoints}
            tempLines={tempLines}
            clickHandler={handleClick}
            keyHandler={keyAction}
            mouseMoveHandler={mouseMove}/>
    )
};

export default lineTool;