import React, {useEffect, useState} from 'react';
import './Canvas.scss';
import lineDrawer from "./lineDrawer";

const canvas = ({points, tempLine, lines, clickHandler, keyHandler, mouseMoveHandler}) => {

    useEffect(() => {
        console.log('first');
        const canvas = document.getElementById('canvas');
        setCanvas(canvas);
        const context = canvas.getContext('2d');
        setContext(context);
        context.strokeStyle = "white";
        context.lineWidth = 2;
    }, []);

    useEffect(() => {
        console.log('second');
        console.log(lines);
        console.log(points);
        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawAllLines()
    }, [points, lines, tempLine]);

    const [canvas, setCanvas] = useState(null);
    const [context, setContext] = useState(null);

    const drawAllLines = () => {
        lines.forEach((line) => {
            const start = (points.filter((point) => point.id === line.start))[0];
            const end = (points.filter((point) => point.id === line.end))[0];
            lineDrawer(context, {start, end});
        });
        if(tempLine){
            lineDrawer(context, tempLine)
        }
    };


    return (
        <canvas /*ref={canvas}*/
            id='canvas'
            width="1000px"
            height="600px"
            tabIndex="0"
            onClick={(event) => clickHandler(event, context)}
            onMouseMove={(event) => mouseMoveHandler(event, context)}
            onKeyDown={(event) => keyHandler(event, context)}/>
    )
};

export default canvas;