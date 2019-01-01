import React, {useEffect, useState, useRef} from 'react';
import './Canvas.scss';
import lineDrawer from "./lineDrawer";
import {connect} from "react-redux";
import pointDrawer from "./pointDrawer";
import tempLineDrawer from "./tempLineDrawer";
import tempPointDrawer from "./tempPointDrawer";

const canvas = ({points, tempLine, lines, clickHandler, keyHandler, mouseMoveHandler}) => {

    useEffect(() => {
        setCanvas(canvasRef.current);
        const context = canvasRef.current.getContext('2d');
        setContext(context);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvasRef.current.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawAllLines()
    }, [points, lines, tempLine]);

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