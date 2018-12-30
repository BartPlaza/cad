import generateId from "./generateId";

const generatePoint = (x, y) => ({
    id: generateId(),
    x: x,
    y: y,
    isSelected: false
});

export default generatePoint