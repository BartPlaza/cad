import React, {useState, useEffect, useRef} from 'react';
import Canvas from "./Canvas";
import generateId from "./generateId";

const testView = () => {

    //const canvas = useRef(null);

    const [points, setPoints] = useState([]);
    const [lines, setLines] = useState([]);
    const [tempLine, setTempLine] = useState(null);
    const [currentPoint, setCurrentPoint] = useState({
        isSet: false,
        position: null
    });


    const handleClick = (event, context) => {
        event.persist();
        if (currentPoint.isSet) {
            const start = {id: generateId(), x: currentPoint.position.x, y: currentPoint.position.y};
            const end = {id: generateId(), x: event.nativeEvent.layerX, y: event.nativeEvent.layerY};
            setPoints((prevPoints) => prevPoints.concat([start, end]));
            setLines((prevLines) => prevLines.concat([{id: generateId(), start: start.id, end: end.id}]));
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
            setTempLine({
                start: {
                    x: currentPoint.position.x,
                    y: currentPoint.position.y
                },
                end: {
                    x: event.nativeEvent.layerX,
                    y: event.nativeEvent.layerY
                }
            });
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
        <div className="container">
            <Canvas points={points} tempLine={tempLine} lines={lines} clickHandler={handleClick} keyHandler={keyAction}
                    mouseMoveHandler={drawTempLine}/>
        </div>
    )

}

export default testView;