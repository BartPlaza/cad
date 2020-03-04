import React, {useRef} from "react";
import {CanvasContextProps, CanvasContextProvider} from "../context/canvas";
import {Point} from "../generators/generatePoint";
import {Line} from "../generators/generateLine";
import {CanvasState} from "../../../store/reducers/canvas";
import pointDrawer from "../drawers/pointDrawer";
import lineDrawer from "../drawers/lineDrawer";
import getContext from "../helpers/getContexFromCanvasRef";

const CanvasService: React.FunctionComponent = ({children}) => {
    const canvasRef: React.Ref<HTMLCanvasElement> = useRef(null);

    const drawPoints = (points: Point[]) => {
        points.forEach((point) => pointDrawer(canvasRef, point));
    };

    const drawLines = (lines: Line[]) => {
        lines.forEach((line) => lineDrawer(canvasRef, line));
    };

    const clearAll = () => {
        const context = getContext(canvasRef);
        if(context) {
            //TODO fix hardcoded width and height
            context.clearRect(0, 0, 10000, 10000)

            /*context.setTransform(
                1,
                0,
                0,
                1,
                0,
                0
            );*/
        }
    };

    const drawAll = (canvasState: CanvasState):void => {
        clearAll();
        drawLines(canvasState.lines);
        drawPoints(canvasState.points);
    };

    const context: CanvasContextProps = {
        canvasRef: canvasRef,
        drawAll
    };

    return (
        <CanvasContextProvider value={context}>
            {children}
        </CanvasContextProvider>
    )
};

export default CanvasService;