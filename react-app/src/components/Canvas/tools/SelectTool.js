import React, {useState} from 'react';
import Canvas from "../Canvas";
import {connect} from "react-redux";
import {selectPoint} from "../../../store/actions/canvas";
import useCurrentPoint from "../hooks/useCurrentPoint";

const selectTool = (props) => {

    const {points, lines, selectPoint} = props;
    const [currentLine, setCurrentLine] = useState(null);
    const currentPoint = useCurrentPoint();

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
            clickHandler={handleClick}
            keyHandler={keyAction}
            mouseMoveHandler={mouseMove}/>
    )
};

const mapDispatchToProps = (dispatch) => ({
    selectPoint: (payload) => dispatch(selectPoint(payload))
});

export default connect(null, mapDispatchToProps)(selectTool);