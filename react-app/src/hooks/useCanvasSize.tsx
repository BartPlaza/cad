import React, {useEffect, useState} from "react";
import {useCanvasContext} from "../components/Canvas/context/canvas";

type CanvasSize = {
    width: number,
    height: number
}

const useCanvasSize = (canvasRef: React.RefObject<HTMLCanvasElement>): CanvasSize => {
    const [canvasSize, setCanvasSize] = useState<CanvasSize>({width: 0, height: 0});

    useEffect(() => {
        if (canvasRef) {
            //@ts-ignore
            const parentNode = canvasRef.current &&  canvasRef.current.parentNode;

            console.log(parentNode);

            if (parentNode) {
                setCanvasSize({
                    //@ts-ignore
                    width: parentNode.clientWidth,
                    //@ts-ignore
                    height: parentNode.clientHeight,
                });
            }
        }
    }, []);

    return canvasSize
};

export default useCanvasSize;