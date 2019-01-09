import React, {useEffect, useState, useRef} from 'react';
import './Canvas.scss';
import lineDrawer from "./drawers/lineDrawer";
import {connect} from "react-redux";
import pointDrawer from "./drawers/pointDrawer";
import tempLineDrawer from "./drawers/tempLineDrawer";
import tempPointDrawer from "./drawers/tempPointDrawer";
import useScale from "./hooks/useScale";
import usePan from "./hooks/usePan";

const canvas = (props) => {

    const {
        canvasState,
        attachedPoint,
        currentPoint, currentLine,
        tempPoints, tempLines,
        clickHandler, keyHandler, mouseMoveHandler, onMouseDown, onMouseUp
    } = props;

    const canvasRef = useRef(null);

    const {points, lines} = canvasState;
    const [canvasSize, setCanvasSize] = useState({width: 0, height: 0});
    const [prevScale, scale] = useScale();
    const [prevPan, pan] = usePan();

    useEffect(() => {
        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');
        context.setTransform(
            1,
            0,
            0,
            1,
            0,
            0
        );

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "red";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.transform(
            scale,
            0,
            0,
            scale,
            pan.x,
            pan.y
        );
        drawAllLines(context);
        drawAllPoints(context);
    }, [scale]);

    useEffect(() => {
        console.log('pannn');
        const canvas = canvasRef.current;
        const context = canvasRef.current.getContext('2d');
        context.setTransform(
            1,
            0,
            0,
            1,
            0,
            0
        );
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "blue";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.transform(
            scale,
            0,
            0,
            scale,
            pan.x,
            pan.y
        );
        drawAllLines(context);
        drawAllPoints(context);
    }, [pan]);


    useEffect(() => {
        setCanvasSize({
            width: canvasRef.current.parentNode.clientWidth,
            height: canvasRef.current.parentNode.clientHeight,
        });
    }, []);


    useEffect(() => {

        const canvas = canvasRef.current;
        const context = canvasRef.current.getContext('2d');
        context.setTransform(
            1,
            0,
            0,
            1,
            0,
            0
        );
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "green";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.transform(
            scale,
            0,
            0,
            scale,
            pan.x,
            pan.y
        );
        drawAllLines(context);
        drawAllPoints(context);
    }, [tempPoints, tempLines, points, lines, currentPoint, currentLine, attachedPoint]);

    const drawAllPoints = (context) => {
        points.forEach((point) => pointDrawer(context, point));
        if (currentPoint) {
            pointDrawer(context, currentPoint, 'green');
        }
        tempPoints.forEach((tempPoint) => tempPointDrawer(context, tempPoint));
    };

    const drawAllLines = (context) => {
        lines.forEach((line) => lineDrawer(context, line));
        if (currentLine) {
            lineDrawer(context, currentLine, 'green');
        }
        tempLines.forEach((tempLine) => {
            tempLineDrawer(context, tempLine)
        });
    };

    return (
        <canvas
            ref={canvasRef}
            id='canvas'
            width={canvasSize.width}
            height={canvasSize.height}
            tabIndex="0"
            onClick={clickHandler}
            onMouseMove={mouseMoveHandler}
            onKeyDown={keyHandler}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}/>
    )
};

const mapStateToProps = (state) => ({
    canvasState: state.canvas
});

export default connect(mapStateToProps)(canvas);