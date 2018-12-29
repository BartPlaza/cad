import React, {useState, useEffect} from 'react';
import Canvas from "../Canvas";
import {connect} from "react-redux";
import {selectPoint} from "../../../store/actions/canvas";
import useCurrentPoint from "../hooks/useCurrentPoint";
import useCurrentLine from "../hooks/useCurrentLine";

const selectTool = (props) => {

    const {points, lines, selectPoint} = props;
    const currentPoint = useCurrentPoint();
    const currentLine = useCurrentLine();

    useEffect(()=>{
       console.log(currentLine);
    },[currentLine]);

    const handleClick = (event, context) => {
        console.log('i am ok');
    };

    const mouseMove = (event) => {
        return false;
    };

    const keyAction = (event) => {
        return false;
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

const mapDispatchToProps = (dispatch) => ({
    selectPoint: (payload) => dispatch(selectPoint(payload))
});

export default connect(null, mapDispatchToProps)(selectTool);