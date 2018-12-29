import React, {useEffect, useState, useRef} from 'react';
import './Canvas.scss';
import lineDrawer from "./lineDrawer";
import {connect} from "react-redux";
import pointDrawer from "./pointDrawer";

const canvas = ({points, tempLine, lines, clickHandler, keyHandler, mouseMoveHandler}) => {

    useEffect(() => {
        setCanvas(canvasRef.current);
        const context = canvasRef.current.getContext('2d');
        setContext(context);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvasRef.current.getContext('2d');
        context.strokeStyle = "white";
        context.lineWidth = 2;
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawAllLines()
    }, [points, lines, tempLine]);

    const drawAllPoints = (context) => {
      points.forEach((point) => pointDrawer(context, point))
    };

    const drawAllLines = (context) => {
        lines.forEach((line) => lineDrawer(context, line));
        if (tempLine) {
            lineDrawer(context, tempLine)
        }
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
            onKeyDown={keyHandler}/>
    )
};

const mapStateToProps = (state) => ({
    canvasState: state.canvas
});

export default connect(mapStateToProps)(canvas);