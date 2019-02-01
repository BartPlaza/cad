import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './CanvasInput.scss';
import {useRedux} from "../../index";
import {getDimensionById, getRelationById} from "../../store/reducers/canvas";
import getTextSize from "./helpers/getTextSize";
import formatDimension from "./helpers/formatDimension";
import dimensionSolver from "./solvers/dimensionSolver";
import {joinClasses} from "../../helpers/functions";
import getDimensionInfo from "./helpers/getDimensionInfo";
import getValue from "./helpers/getValue";

const canvasInput = (props) => {
    const [canvasState, dispatch] = useRedux('canvas');
    const {dimensionId, hideAction} = props;
    const dimension = getDimensionById(canvasState, dimensionId);
    const {p_center, relation} = getDimensionInfo(dimension);
    const [value, setValue] = useState(relation.value);
    const [hasError, setHasError] = useState(false);
    const dimensionSize = getTextSize(formatDimension(relation.value));

    const style = {
        left: getValue(p_center.x - dimensionSize.width / 2 - 10, 'x'),
        top: getValue(p_center.y - (dimensionSize.height) / 2, 'y'),
        height: getValue(dimensionSize.height, 'y'),
        width: getValue(dimensionSize.width + 20, 'x')
    };

    const updateValue = (event) => {
        setValue(event.target.value);
    };

    const handleKeys = (event) => {
        setHasError(false);
        if (event.keyCode === 27) {
            hideAction();
        }
        if (event.keyCode === 13) {
            if(dimensionSolver(dimensionId, value)){
                hideAction();
            } else {
                setHasError(true);
            }
        }
    };

    return (
        <input
            value={value}
            className={joinClasses(['canvas-input', hasError ? 'dimension-error' : null])}
            style={style}
            onChange={updateValue}
            onKeyDown={handleKeys}
        />
    );
};

export default canvasInput;

canvasInput.propTypes = {
    dimensionId: PropTypes.number.isRequired,
    hideAction: PropTypes.func.isRequired
};


