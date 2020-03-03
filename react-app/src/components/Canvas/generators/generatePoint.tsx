import generateId from "./generateId";

export type Point = {
    id: number,
    x: number,
    y: number,
    isSelected: boolean
}

const generatePoint = (x: number, y: number): Point => ({
    id: generateId(),
    x: x,
    y: y,
    isSelected: false
});

export default generatePoint