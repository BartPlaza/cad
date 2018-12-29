import React, {useState} from 'react';
import Canvas from "../Canvas/Canvas";
import {useRedux} from "../../index";
import generatePoint from "./generators/generatePoint";
import generateLine from "./generators/generateLine";

const canvasWrapper = (props) => {

    const [, dispatch] = useRedux('canvas');
    const [tempLine, setTempLine] = useState(null);
    const [currentPoint, setCurrentPoint] = useState({
        isSet: false,
        position: null
    });


    const handleClick = (event, context) => {
        event.persist();
        if (currentPoint.isSet) {
            const start = new generatePoint(currentPoint.position.x, currentPoint.position.y);
            const end = new generatePoint(event.nativeEvent.layerX, event.nativeEvent.layerY);
            dispatch.addPoint(start);
            dispatch.addPoint(end);
            const line = new generateLine(start, end);
            dispatch.addLine(line);
            setCurrentPoint({isSet: false, position: null});
            setTempLine(null);
        } else {
            setCurrentPoint({
                isSet: true,
                position: {
                    x: event.nativeEvent.layerX,
                    y: event.nativeEvent.layerY
                }
            });
        }
    };

    const drawTempLine = (event) => {
        if (currentPoint.isSet) {
            const start = new generatePoint(currentPoint.position.x, currentPoint.position.y);
            const end = new generatePoint(event.nativeEvent.layerX, event.nativeEvent.layerY);
            const line = new generateLine(start, end);
            setTempLine(line);
        }
    };

    const keyAction = (event) => {
        if (event.keyCode === 27 && currentPoint.isSet) {
            setCurrentPoint({
                isSet: false,
                position: null
            });
            setTempLine(null);
        }
    };

    return (
            <Canvas tempLine={tempLine} clickHandler={handleClick} keyHandler={keyAction}
                    mouseMoveHandler={drawTempLine}/>
    )
};

export default canvasWrapper;