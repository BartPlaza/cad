
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
        return line.start.id === pointId || line.end.id === pointId;
    });
};

const isUsedInLines = (pointId, lines) => {
    return UsedInLines(pointId, lines).length > 0;
};

export default canvasReducer