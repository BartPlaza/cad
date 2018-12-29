import {useState, useEffect} from 'react';
import {useRedux} from "../../../index";

const useCurrentLine = () => {
    const [currentLine, setCurrentLine] = useState(null);
    const [canvas,] = useRedux('canvas');

    useEffect(() => {
        document.addEventListener('mousemove', checkCurrentLine);
        return () => document.removeEventListener('mousemove', checkCurrentLine);
    }, [canvas]);

    const checkCurrentLine = (event) => {
        const x = event.layerX;
        const y = event.layerY;
        let isSet = false;
        canvas.lines.forEach((line) => {
            // const line = canvas.lines[0];
            if(isNearest(x, y, line)){
                const params = getEquationParams(line);
                const distance = getDistance(x, y, params);
                if(distance < 15){
                    isSet = true;
                    setCurrentLine((prevCurrentLine) => {
                        return (prevCurrentLine && prevCurrentLine.id === line.id) ? prevCurrentLine : line;
                    });
                }
            }
        });
        if(!isSet){
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
        return (Math.abs(a * x + b * y + c))/Math.sqrt(a*a + b*b)
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