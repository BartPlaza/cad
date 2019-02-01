import React, {useState} from 'react';
import useCurrentPoint from "../hooks/useCurrentPoint";
import {useRedux} from "../../../index";
import generateDistanceRelation from "../generators/generateDistanceRelation";
import generateDistanceDimension from "../generators/generateDistanceDimension";
import Canvas from "../Canvas";

const dimensionTool = () => {
    const currentPoint = useCurrentPoint();
    const [startPoint, setStartPoint] = useState(null);
    const [, dispatch] = useRedux('canvas');


    const handleClick = () => {
        if(startPoint){
            if (currentPoint && currentPoint.id !== startPoint.id){
                const relation = generateDistanceRelation(startPoint, currentPoint);
                dispatch.addRelation(relation);
                dispatch.addDimension(generateDistanceDimension(relation));
                setStartPoint(null);
            }
        } else {
            if (currentPoint){
                setStartPoint(currentPoint);
            }
        }
    };

    return (
        <Canvas
            currentPoint={currentPoint}
            clickHandler={handleClick}
            tempPoints={[]}
            tempLines={[]}
        />
    );
};

export default dimensionTool;