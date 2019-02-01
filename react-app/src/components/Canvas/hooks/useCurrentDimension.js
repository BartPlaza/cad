import {useState, useEffect} from 'react'
import {useRedux} from "../../../index";
import getMousePosition from "../helpers/getMousePosition";
import formatDimension from "../helpers/formatDimension";
import getDimensionInfo from "../helpers/getDimensionInfo";
import getTextSize from "../helpers/getTextSize";
import {getDimensions} from "../../../store/reducers/canvas";

const useCurrentDimension = () => {

    const [currentDimension, setCurrentDimension] = useState(null);
    const [canvasState,] = useRedux('canvas');

    useEffect(() => {
        document.addEventListener('mousemove', checkCurrentDimension);
        return () => document.removeEventListener('mousemove', checkCurrentDimension);
    }, [canvasState]);

    const checkCurrentDimension = (event) => {
        const {x, y} = getMousePosition(event.layerX, event.layerY);
        let isSet = false;
        getDimensions(canvasState).forEach((dimension) => {
            if (isInsideDimension(x, y, dimension)) {
                isSet = true;
                setCurrentDimension(dimension);
            }
        });

        if (!isSet) {
            setCurrentDimension(null);
        }
    };

    const isInsideDimension = (x, y, dimension) => {
        const {p_center, relation} = getDimensionInfo(dimension);
        const text = formatDimension(relation.value);
        const {width, height} = getTextSize(text);
        const x_1 = p_center.x - width / 2;
        const x_2 = p_center.x + width / 2;
        const y_1 = p_center.y - height / 2;
        const y_2 = p_center.y + height / 2;
        return (x_2 > x && x > x_1) && (y_2 > y && y > y_1);
    };

    return currentDimension;
};

export default useCurrentDimension