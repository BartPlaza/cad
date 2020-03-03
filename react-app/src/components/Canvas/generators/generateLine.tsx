import generateId from "./generateId";

export type Line = {
    id: number,
    start: number,
    end: number,
    isSelected: boolean
}

const generateLine = (start: number, end: number): Line => ({
    id: generateId(),
    start: start,
    end: end,
    isSelected: false
});

export default generateLine