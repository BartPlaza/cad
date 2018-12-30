import React, {useState, useEffect} from 'react';
import Canvas from "../Canvas";
import {connect} from "react-redux";
import {
    removeLines,
    removePoints,
    removeSelected,
    selectLine,
    selectPoint,
    unselectAll
} from "../../../store/actions/canvas";
import useCurrentPoint from "../hooks/useCurrentPoint";
import useCurrentLine from "../hooks/useCurrentLine";

const selectTool = (props) => {

    const {points, lines, selectPoint, selectLine, unselectAll, removePoints, removeLines} = props;
    const currentPoint = useCurrentPoint();
    const currentLine = useCurrentLine();

    const handleClick = (event, context) => {
        if (currentPoint) {
            selectPoint(currentPoint.id);
        } else if (currentLine) {
            selectLine(currentLine.id);
        } else {
            unselectAll();
        }
    };

    const mouseMove = (event) => {
        return false;
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
            points = points.includes(line.start.id) ? points : [...points, line.start.id];
            points = points.includes(line.end.id) ? points : [...points, line.end.id];
            return points;
        }, []);

        removeLines(linesIds);
        removePoints(pointsIds)
    };

    return (
        <Canvas
            currentPoint={currentPoint}
            currentLine={currentLine}
            clickHandler={handleClick}
            keyHandler={keyAction}
            mouseMoveHandler={mouseMove}/>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(selectTool);