import React, {useEffect, useState, useRef} from 'react';
import './Canvas.scss';
import lineDrawer from "./drawers/lineDrawer";
import {connect} from "react-redux";
import pointDrawer from "./drawers/pointDrawer";
import tempLineDrawer from "./drawers/tempLineDrawer";
import tempPointDrawer from "./drawers/tempPointDrawer";
import useScale from "./hooks/useScale";
import usePan from "./hooks/usePan";
import dimensionDrawer from "./drawers/dimensionDrawer";
import CanvasInput from "./CanvasInput";

const canvas = (props) => {

    const {
        canvasState,
        attachedPoint,
        currentPoint, currentLine, currentDimension,
        tempPoints, tempLines,
        clickHandler, keyHandler, mouseMoveHandler, onMouseDown, onMouseUp,
    } = props;

    const canvasRef = useRef(null);

    const {points, lines, dimensions} = canvasState;
    const [canvasSize, setCanvasSize] = useState({width: 0, height: 0});
    const [input, setInput] = useState({
        show: false,
        dimension_id: null
    });
    const scale = useScale();
    const pan = usePan();

    useEffect(() => {
        setCanvasSize({
            width: canvasRef.current.parentNode.clientWidth,
            height: canvasRef.current.parentNode.clientHeight,
        });
    }, []);

    useEffect(() => {
        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');
        clearCanvas(context);
        context.fillStyle = "red";
        context.clearRect(0, 0, canvas.width, canvas.height);
        scaleCanvas(context);
        drawAllLines(context);
        drawAllPoints(context);
        drawAllDimensions(context);
    }, [scale]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvasRef.current.getContext('2d');
        clearCanvas(context);
        context.fillStyle = "blue";
        context.clearRect(0, 0, canvas.width, canvas.height);
        scaleCanvas(context);
        drawAllLines(context);
        drawAllPoints(context);
        drawAllDimensions(context);
    }, [pan]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvasRef.current.getContext('2d');
        clearCanvas(context);
        context.fillStyle = "green";
        context.clearRect(0, 0, canvas.width, canvas.height);
        scaleCanvas(context);
        drawAllDimensions(context);
        drawAllLines(context);
        drawAllPoints(context);
    }, [tempPoints, tempLines, points, lines, currentPoint, currentLine, currentDimension, attachedPoint]);

    const clearCanvas = (context) => {
        context.setTransform(
            1,
            0,
            0,
            1,
            0,
            0
        );
        context.clearRect(0, 0, canvas.width, canvas.height);
    };

    const scaleCanvas = (context) => {
        context.transform(
            scale,
            0,
            0,
            scale,
            pan.x,
            pan.y
        );
    };

    const drawAllPoints = (context) => {
        points.forEach((point) => pointDrawer(context, point));
        if (currentPoint) {
            pointDrawer(context, currentPoint, 'green');
        }
        tempPoints.forEach((tempPoint) => tempPointDrawer(context, tempPoint));
    };

    const drawAllLines = (context) => {
        lines.forEach((line) => lineDrawer(context, line));
        if (currentLine && !currentPoint) {
            lineDrawer(context, currentLine, 'green');
        }
        tempLines.forEach((tempLine) => {
            tempLineDrawer(context, tempLine)
        });
    };

    const drawAllDimensions = (context) => {
        dimensions.forEach((dimension) => dimensionDrawer(context, dimension));
        if (currentDimension && !currentPoint && !currentLine) {
            dimensionDrawer(context, currentDimension, 'green');
        }
    };

    const style = {
        cursor: (currentPoint || currentLine || currentDimension) ? 'pointer' : 'default'
    };

    const hideInput = () => {
        setInput({
            show: false,
            dimension_id: null
        });
    };

    const onDoubleClick = () => {
        if (currentDimension) {
            setInput({
                show: true,
                dimension_id: currentDimension.id
            });
        } else {
            hideInput();
        }
    };

    return (
        <React.Fragment>
            <canvas
                ref={canvasRef}
                id='canvas'
                width={canvasSize.width}
                height={canvasSize.height}
                tabIndex="0"
                style={style}
                onClick={clickHandler}
                onMouseMove={mouseMoveHandler}
                onKeyDown={keyHandler}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onDoubleClick={onDoubleClick}
            />
            {input.show && <CanvasInput dimensionId={input.dimension_id} hideAction={hideInput}/>}
        </React.Fragment>
    )
};

const mapStateToProps = (state) => ({
    canvasState: state.canvas
});

export default connect(mapStateToProps)(canvas);