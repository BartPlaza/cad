import React, {useState} from 'react';
import {Tool} from "../services/ToolService";
import {ToolTypes} from "../constants/tools";
import generatePoint, {Point} from "../generators/generatePoint";
import generateLine from "../generators/generateLine";
import {addLine, addPoint} from "../../../store/actions/canvas";
import {useDispatch} from "react-redux";
import getMousePosition from "../helpers/getMousePosition";
import generateTempLine from "../generators/generateTempLine";
import {setTempLines} from "../../../store/actions/temporaries";


const LineTool = (): Tool => {

    const dispatch = useDispatch();
    const [startPoint, setStartPoint] = useState<Point | null>(null);

    const currentPoint = null;

    const onClick = (event: React.MouseEvent) => {
        //@ts-ignore
        const mousePosition = getMousePosition(event.nativeEvent.layerX, event.nativeEvent.layerY);
        if (startPoint) {
            const endPoint = generatePoint(mousePosition.x, mousePosition.y);
            if(startPoint.id !== endPoint.id){
                dispatch(addPoint(startPoint));
                dispatch(addPoint(endPoint));
                const line = generateLine(startPoint.id, endPoint.id);
                dispatch(addLine(line));
                setStartPoint(null);
                dispatch(setTempLines([]));
            }
        } else {
            setStartPoint(currentPoint ? currentPoint : generatePoint(mousePosition.x, mousePosition.y));
        }
    };

    const onMouseMove = (event: React.MouseEvent) => {
        if (startPoint) {
            //@ts-ignore
            const mousePosition = getMousePosition(event.nativeEvent.layerX, event.nativeEvent.layerY);
            const tempEndPoint = generatePoint(mousePosition.x, mousePosition.y);
            const tempLine = generateTempLine(startPoint, tempEndPoint);
            dispatch(setTempLines([tempLine]));
        }
    };

    return {
        name: ToolTypes.LINE,
        onClick,
        onMouseMove
    }
};

export default LineTool;