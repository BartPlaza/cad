import generateId from "./generateId";

const generateLine = (start, end) => ({
    id: generateId(),
    start: {
        x: start.x,
        y: start.y
    },
    end: {
        x: end.x,
        y: end.y
    },
});

export default generateLine