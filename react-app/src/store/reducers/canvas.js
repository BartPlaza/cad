
const initialState = {
    points: [],
    lines: [],
    tempLine: [],
    tool: null
};

const canvasReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const pointCanNotBeRemoved = (point, state) => {
    console.log(point);
    return isUsedInLines(point.id, state.lines);
};

const findPoint = (points, newPoint) => {
    return points.filter((point) => (point.x === newPoint.x && point.y === newPoint.y));
};

const pointExists = (points, newPoint) => {
    return findPoint(points, newPoint).length > 0;
};

const UsedInLines = (pointId, lines) => {
    return lines.filter((line) => {
        return line.start === pointId || line.end === pointId;
    });
};

const isUsedInLines = (pointId, lines) => {
    return UsedInLines(pointId, lines).length > 0;
};

export const getPointX = (id, points) => {
    let point = findById(id, points);
    return point.x
};

export const getPointY = (id, points) => {
    let point = findById(id, points);
    return point.y
};

export const getPointLines = (id, lines) => {
    return lines.filter((line) => line.start === id || line.end === id)
};

const findById = (id, items) => items.filter((item) => item.id === id)[0];

export default canvasReducer