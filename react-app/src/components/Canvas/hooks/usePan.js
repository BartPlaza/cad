import {useState, useEffect} from 'react';
import usePrevious from "../../../hooks/usePrevious";
import {useRedux} from "../../../index";
import {getPan, getScale} from "../../../store/reducers/camera";

const usePan = () => {

    const [cameraState, dispatch] = useRedux('camera');
    const [pan, setPan] = useState(getPan(cameraState));
    const [currentPan, setCurrentPan] = useState({x: 0, y: 0});
    const [isActive, setIsActive] = useState(false);
    const [startPoint, setStartPoint] = useState(null);
    const [mousePosition, setMousePosition] = useState(null);

    useEffect(() => {
        console.log(getPan(cameraState));
        setPan({...getPan(cameraState)});
        document.addEventListener('mousedown', startPan);
        document.addEventListener('mouseup', stopPan);
        document.addEventListener('mousemove', movePan);
        return () => {
            document.removeEventListener('mousedown', startPan);
            document.removeEventListener('mouseup', stopPan);
            document.removeEventListener('mousemove', movePan);
        };
    }, []);

    useEffect(() => {
        if (!isActive) {
            setCurrentPan({...pan});
            dispatch.setPan({...pan})
        }
    }, [isActive]);

    useEffect(() => {
        if (isActive) {
            setPan({
                x: currentPan.x + (mousePosition.x - startPoint.x),
                y: currentPan.y + (mousePosition.y - startPoint.y)
            });
        }
    }, [mousePosition]);

    const startPan = (event) => {
        if (event.which === 2) {
            setStartPoint({
                x: event.clientX,
                y: event.clientY
            });
            setIsActive(true);
        }
    };

    const movePan = (event) => {
        setMousePosition({
            x: event.clientX,
            y: event.clientY
        });
    };

    const stopPan = (event) => {
        if (event.which === 2) {
            setIsActive(false);
            setStartPoint(null);
        }
    };

    return pan;
};

export default usePan;