import React, {useEffect, useState, useRef} from 'react';
import './Canvas.scss';
import lineDrawer from "./drawers/lineDrawer";
import {connect} from "react-redux";
import pointDrawer from "./drawers/pointDrawer";
import tempLineDrawer from "./drawers/tempLineDrawer";
import tempPointDrawer from "./drawers/tempPointDrawer";

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
    const [canvas, setCanvas] = useState(null);
    const [canvasSize, setCanvasSize] = useState({width: 0, height: 0});
    const [context, setContext] = useState(null);

    useEffect(() => {
        setCanvasSize({
            width: canvasRef.current.parentNode.clientWidth,
            height: canvasRef.current.parentNode.clientHeight,
        });
    }, []);

    useEffect(() => {
        setCanvas(canvasRef.current);
        const context = canvasRef.current.getContext('2d');
        setContext(context);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvasRef.current.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawAllLines(context);
        drawAllPoints(context);
    }, [canvas, tempPoints, tempLines, points, lines, currentPoint, currentLine, attachedPoint]);

    const drawAllPoints = (context) => {
        points.forEach((point) => pointDrawer(context, point));
        if(currentPoint){
            pointDrawer(context, currentPoint, 'green');
        }
        tempPoints.forEach((tempPoint) => tempPointDrawer(context, tempPoint));
    };

    const drawAllLines = (context) => {
        lines.forEach((line) => lineDrawer(context, line, points));
        if(currentLine){
            lineDrawer(context, currentLine, points, 'green');
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