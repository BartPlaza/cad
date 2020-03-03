import React from "react";

const getContext = (canvasRef: React.RefObject<HTMLCanvasElement>): CanvasRenderingContext2D | null => {
    const canvas = canvasRef.current;
    return canvas ? canvas.getContext("2d") : null;
};

export default getContext;