import {store} from '../../../index'
import {getScale} from "../../../store/reducers/camera";
import React from "react";
import {TempLine} from "../generators/generateTempLine";

const tempLineDrawer = (canvasRef: React.Ref<HTMLCanvasElement> | null, tempLine: TempLine): void => {

    //@ts-ignore
    const canvas = canvasRef.current;
    const context = canvas ? canvas.getContext("2d") : null;

    if (context) {
        // const scale = getScale(store.getState()['camera']);
        // context.lineWidth = 1 / scale;

        context.lineWidth = 1;
        context.strokeStyle = 'lightgrey';
        context.beginPath();
        context.moveTo(tempLine.start.x, tempLine.start.y);
        context.lineTo(tempLine.end.x, tempLine.end.y);
        context.stroke();
        context.closePath();
    }
};

export default tempLineDrawer;

