import React, {useContext} from "react";
import {CanvasState} from "../../../store/reducers/canvas";
import {noop} from 'lodash';

export type CanvasContextProps = {
    canvasRef: React.RefObject<HTMLCanvasElement>,
    drawAll(canvasState: CanvasState): void
}

const Canvas = React.createContext<CanvasContextProps>({
    canvasRef: React.createRef(),
    drawAll: noop
});

export const useCanvasContext = () => {
    return useContext(Canvas)
};

export const CanvasContextProvider = Canvas.Provider;