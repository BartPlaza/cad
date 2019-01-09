import {useState, useEffect} from 'react';
import {useRedux} from "../../../index";
import getMousePosition from "../helpers/getMousePosition";
import getScaledValue from "../helpers/getScaledValue";

const useCurrentLine = () => {
    const [currentLine, setCurrentLine] = useState(null);
    const [canvasState,] = useRedux('canvas');
    const baseDistance = getScaledValue(15);

    useEffect(() => {
        document.addEventListener('mousemove', checkCurrentLine);
        return () => document.removeEventListener('mousemove', checkCurrentLine);
    }, [canvasState]);

    const checkCurrentLine = (event) => {
        const {x, y} = getMousePosition(event.layerX, event.layerY);
        let isSet = false;
        canvasState.lines.forEach((line) => {
            // const line = canvas.lines[0];
            const start = canvasState.points.filter((point) => line.start === point.id)[0];
            const end = canvasState.points.filter((point) => line.end === point.id)[0];
            if (isNearest(x, y, {start, end})) {
                const params = getEquationParams({start, end});
                const distance = getDistance(x, y, params);
                if (distance < baseDistance) {
                    isSet = true;
                    setCurrentLine((prevCurrentLine) => {
                        return (prevCurrentLine && prevCurrentLine.id === line.id) ? prevCurrentLine : line;
                    });
                }
            }
        });
        if (!isSet) {
            setCurrentLine(null);
        }
    };

    const isNearest = (x, y, line) => {
        const {start, end} = line;
        const x1 = Math.min(start.x, end.x);
        const x2 = Math.max(start.x, end.x);
        const y1 = Math.min(start.y, end.y);
        const y2 = Math.max(start.y, end.y);
        return (x1 <= x && x <= x2) && (y1 <= y && y <= y2);
    };

    const getDistance = (x, y, params) => {
        const {a, b, c} = params;
        return (Math.abs(a * x + b * y + c)) / Math.sqrt(a * a + b * b)
    };

    const getEquationParams = (line) => {
        const {start, end} = line;
        const a = start.y - end.y;
        const b = end.x - start.x;
        const c = ((start.x - end.x) * start.y) + ((end.y - start.y) * start.x);
        return {a, b, c};
    };

    return currentLine;
};

export default useCurrentLine;