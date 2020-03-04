import React, {useState} from 'react';
import {Tool} from "../services/ToolService";
import {ToolTypes} from "../constants/tools";
import generatePoint, {Point} from "../generators/generatePoint";
import generateLine from "../generators/generateLine";
import {addLine, addPoint} from "../../../store/actions/canvas";
import {useDispatch} from "react-redux";
import getMousePosition from "../helpers/getMousePosition";
import generateTempLine from "../generators/generateTempLine";
import {setTempLines, setTempPoints} from "../../../store/actions/temporaries";
import useCurrentPoint from "./useCurrentPoint";

const LineTool = (): Tool => {

    const dispatch = useDispatch();
    const [startPoint, setStartPoint] = useState<Point | null>(null);
    const currentPoint = useCurrentPoint();

    const onClick = (event: React.MouseEvent) => {
        //@ts-ignore
        const mousePosition = getMousePosition(event.nativeEvent.layerX, event.nativeEvent.layerY);
        if (startPoint) {
            const endPoint = currentPoint || generatePoint(mousePosition.x, mousePosition.y);
            if(startPoint.id !== endPoint.id){
                dispatch(addPoint(startPoint));
                dispatch(addPoint(endPoint));
                const line = generateLine(startPoint.id, endPoint.id);
                dispatch(addLine(line));
                setStartPoint(null);
                dispatch(setTempLines([]));
                dispatch(setTempPoints([]));
            }
        } else {
            const startPoint = currentPoint || generatePoint(mousePosition.x, mousePosition.y);
            setStartPoint(startPoint);
            dispatch(setTempPoints([startPoint]));
        }
    };

    const onMouseMove = (event: React.MouseEvent) => {
        //@ts-ignore
        const mousePosition = getMousePosition(event.nativeEvent.layerX, event.nativeEvent.layerY);
        const tempPoint = currentPoint || generatePoint(mousePosition.x, mousePosition.y);
        if (startPoint) {
            const tempLine = generateTempLine(startPoint, tempPoint);
            dispatch(setTempPoints([startPoint, tempPoint]));
            dispatch(setTempLines([tempLine]));
        } else {
            dispatch(setTempPoints([tempPoint]));
        }
    };

    return {
        name: ToolTypes.LINE,
        onClick,
        onMouseMove
    }
};

export default LineTool;