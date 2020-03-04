import React, {useEffect, useState, useRef} from 'react';
import './Canvas.scss';
import {useSelector} from "react-redux";
import useCanvasSize from "../../hooks/useCanvasSize";
import {useCanvasContext} from "./context/canvas";
import {useToolContext} from "./context/tool";
import {GlobalState} from "../../store/reducer";

const Canvas: React.FunctionComponent = () => {

    const canvasState = useSelector((state: GlobalState) => state.canvas);
    const {canvasRef, drawAll} = useCanvasContext();
    const canvasSize = useCanvasSize(canvasRef);
    const {name, onClick, onMouseMove} = useToolContext();

    console.log('Canvas render');
    console.log('Current tool is: ', name);

    useEffect(() => {
        drawAll(canvasState);
    }, [canvasState, canvasSize]);


    /* useEffect(() => {
         const canvas = document.getElementById('canvas');
         const context = canvas.getContext('2d');
         clearCanvas(context);
         context.fillStyle = "red";
         context.clearRect(0, 0, canvas.width, canvas.height);
         scaleCanvas(context);
         drawAllLines(context);
         drawAllPoints(context);
         drawAllDimensions(context);
     }, [scale]);*/

    /*useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvasRef.current.getContext('2d');
        clearCanvas(context);
        context.fillStyle = "blue";
        context.clearRect(0, 0, canvas.width, canvas.height);
        scaleCanvas(context);
        drawAllLines(context);
        drawAllPoints(context);
        drawAllDimensions(context);
    }, [pan]);*/

    /*useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvasRef.current.getContext('2d');
        clearCanvas(context);
        context.fillStyle = "green";
        context.clearRect(0, 0, canvas.width, canvas.height);
        scaleCanvas(context);
        drawAllDimensions(context);
        drawAllLines(context);
        drawAllPoints(context);
    }, [tempPoints, tempLines, points, lines, currentPoint, currentLine, currentDimension, attachedPoint]);*/

    /* const clearCanvas = (context) => {
         context.setTransform(
             1,
             0,
             0,
             1,
             0,
             0
         );
         context.clearRect(0, 0, canvas.width, canvas.height);
     };*/

    /*const scaleCanvas = (context) => {
        context.transform(
            scale,
            0,
            0,
            scale,
            pan.x,
            pan.y
        );
    };*/

    /*const drawAllDimensions = (context) => {
        dimensions.forEach((dimension) => dimensionDrawer(context, dimension));
        if (currentDimension && !currentPoint && !currentLine) {
            dimensionDrawer(context, currentDimension, 'green');
        }
    };*/

    /*const style = {
        cursor: (currentPoint || currentLine || currentDimension) ? 'pointer' : 'default'
    };*/

    /*const hideInput = () => {
        setInput({
            show: false,
            dimension_id: null
        });
    };*/

    /*const onDoubleClick = () => {
        if (currentDimension) {
            setInput({
                show: true,
                dimension_id: currentDimension.id
            });
        } else {
            hideInput();
        }
    };*/

    return (
        <canvas
            id='canvas'
            ref={canvasRef}
            width={canvasSize.width}
            height={canvasSize.height}
            tabIndex={0}
            onClick={onClick}
            onMouseMove={onMouseMove}
        />
    )
};

export default Canvas;