import generateId from "./generateId";

const generateLine = (start, end) => ({
    id: generateId(),
    start: start,
    end: end,
    isSelected: false
});

export default generateLine