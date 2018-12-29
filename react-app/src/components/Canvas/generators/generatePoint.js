import generateId from "./generateId";

const generatePoint = (x, y) => ({
    id: generateId(),
    x: x,
    y: y,
    color: 'black'
});

export default generatePoint