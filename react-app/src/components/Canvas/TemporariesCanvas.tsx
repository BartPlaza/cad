import './TemporariesCanvas.scss';
import React, {useEffect} from 'react';
import useCanvasSize from "../../hooks/useCanvasSize";
import {useTemporariesContext} from "./context/temporaries";
import {useSelector} from "react-redux";
import {GlobalState} from "../../store/reducer";

const TemporariesCanvas = () => {

    const temporariesState = useSelector((state: GlobalState) => state.temporaries);
    const {canvasRef, drawAll} = useTemporariesContext();
    const canvasSize = useCanvasSize(canvasRef);

    console.log('render here', canvasSize);

    useEffect(() => {
        drawAll(temporariesState);
    }, [canvasSize, temporariesState]);


    return (
        <canvas
            id="temporaries-canvas"
            tabIndex={0}
            ref={canvasRef}
            width={canvasSize.width}
            height={canvasSize.height}>
        </canvas>
    );
};

export default TemporariesCanvas;