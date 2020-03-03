import React, {useRef} from "react";
import getContext from "../helpers/getContexFromCanvasRef";
import {TemporariesContextProps, TemporariesContextProvider} from "../context/temporaries";
import {TempLine} from "../generators/generateTempLine";
import tempLineDrawer from "../drawers/tempLineDrawer";
import {TemporariesState} from "../../../store/reducers/temporaries";

const TemporariesService: React.FunctionComponent = ({children}) => {
    const canvasRef: React.Ref<HTMLCanvasElement> = useRef(null);

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

    const drawTempLines = (tempLines: TempLine[]) => {
        tempLines.forEach((tempLine) => tempLineDrawer(canvasRef, tempLine));
    };

    const drawAll = (temporariesState: TemporariesState):void => {
        clearAll();
        drawTempLines(temporariesState.lines);
    };

    const context: TemporariesContextProps = {
        canvasRef: canvasRef,
        drawAll
    };

    return (
        <TemporariesContextProvider value={context}>
            {children}
        </TemporariesContextProvider>
    )
};

export default TemporariesService;