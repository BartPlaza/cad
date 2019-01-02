import React, {useState, useEffect} from 'react';
import Canvas from "../Canvas";
import {connect} from "react-redux";
import {
    joinPoints,
    movePoint,
    removeLines,
    removePoints,
    selectLine,
    selectPoint,
    unselectAll
} from "../../../store/actions/canvas";
import useCurrentPoint from "../hooks/useCurrentPoint";
import useCurrentLine from "../hooks/useCurrentLine";
import generatePoint from "../generators/generatePoint";
import generateTempLine from "../generators/generateTempLine";
import generateTempPoint from "../generators/generateTempPoint";
import {getPointLines, getPointX, getPointY} from "../../../store/reducers/canvas";

const selectTool = (props) => {

    const {points, lines, selectPoint, selectLine, unselectAll, removePoints, removeLines, movePoint, joinPoints} = props;
    const currentPoint = useCurrentPoint();
    const currentLine = useCurrentLine();
    const [tempLines, setTempLines] = useState([]);
    const [tempPoints, setTempPoints] = useState([]);
    const [attachedPoint, setAttachedPoint] = useState(null);

    useEffect(() => {
        console.log(currentPoint);
    }, [currentPoint]);


    const handleClick = (event, context) => {
        if (currentPoint) {
            //selectPoint(currentPoint.id);
        } else if (currentLine) {
            selectLine(currentLine.id);
        } else {
            unselectAll();
        }
    };

    const onMouseDown = (event) => {
        if (currentPoint) {
            setAttachedPoint(currentPoint);
        }
    };

    const onMouseUp = (event) => {
        if (attachedPoint) {
            if (currentPoint && currentPoint.id !== attachedPoint.id) {
                joinPoints({fromId: attachedPoint.id, toId: currentPoint.id});
            } else if (!currentPoint){
                movePoint({
                    id: attachedPoint.id,
                    x: event.nativeEvent.layerX,
                    y: event.nativeEvent.layerY
                });
            }
            setAttachedPoint(null);
            setTempPoints([]);
            setTempLines([]);
        }
    };

    const mouseMove = (event) => {
        if (attachedPoint) {
            event.persist();
            const tempPoint = generatePoint(event.nativeEvent.layerX, event.nativeEvent.layerY);
            setTempPoints([tempPoint]);
            setTempLines(recalculateLines(attachedPoint, tempPoint));
        }
    };

    const keyAction = (event) => {
        if (event.keyCode === 46) {
            removeSelected();
        }
    };

    const removeSelected = () => {
        const selectedLines = lines.filter((line) => line.isSelected === true);
        const linesIds = selectedLines.map((line) => line.id);
        const pointsIds = selectedLines.reduce((points, line) => {
            points = points.includes(line.start) ? points : [...points, line.start];
            points = points.includes(line.end) ? points : [...points, line.end];
            return points;
        }, []);

        removeLines(linesIds);
        removePoints(pointsIds)
    };

    const recalculateLines = (attachedPoint, tempPoint) => {
        const relatedLines = getPointLines(attachedPoint.id, lines);
        return relatedLines.map((line) => {
            const start = line.start === attachedPoint.id ? generateTempPoint(tempPoint.x, tempPoint.y) : generateTempPoint(getPointX(line.start, points), getPointY(line.start, points));
            const end = line.end === attachedPoint.id ? generateTempPoint(tempPoint.x, tempPoint.y) : generateTempPoint(getPointX(line.end, points), getPointY(line.end, points));
            return generateTempLine(start, end);
        });
    };

    return (
        <Canvas
            attachedPoint={attachedPoint}
            currentPoint={currentPoint}
            currentLine={currentLine}
            tempPoints={tempPoints}
            tempLines={tempLines}
            clickHandler={handleClick}
            keyHandler={keyAction}
            mouseMoveHandler={mouseMove}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
        />
    )
};

const mapStateToProps = (state) => ({
    points: state.canvas.points,
    lines: state.canvas.lines,
});

const mapDispatchToProps = (dispatch) => ({
    selectPoint: (payload) => dispatch(selectPoint(payload)),
    selectLine: (payload) => dispatch(selectLine(payload)),
    unselectAll: (payload) => dispatch(unselectAll(payload)),
    removePoints: (payload) => dispatch(removePoints(payload)),
    removeLines: (payload) => dispatch(removeLines(payload)),
    movePoint: (payload) => dispatch(movePoint(payload)),
    joinPoints: (payload) => dispatch(joinPoints(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(selectTool);