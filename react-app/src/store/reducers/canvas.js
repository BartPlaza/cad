import * as actionTypes from '../actions/actionTypes';

const initialState = {
    points: [],
    lines: [],
    tempLine: [],
    tool: null
};

const canvasReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_POINT:
            return {
                ...state,
                points: pointExists(state.points, action.payload) ? state.points : state.points.concat([action.payload])
            };
        case actionTypes.MOVE_POINT:
            const {id, x, y} = action.payload;
            return {
                ...state,
                points: state.points.map((point) => point.id === id ? {...point, x: x, y: y} : point
                )
            };
        case actionTypes.REMOVE_POINTS:
            return {
                ...state,
                points: state.points.filter((point) => !action.payload.includes(point.id) || pointCanNotBeRemoved(point, state))
            };
        case actionTypes.ADD_LINE:
            return {
                ...state,
                lines: state.lines.concat([action.payload])
            };
        case actionTypes.REMOVE_LINES:
            return {
                ...state,
                lines: state.lines.filter((line) => !action.payload.includes(line.id))
            };
        case actionTypes.SELECT_TOOL:
            return {
                ...state,
                tool: action.payload
            };
        case actionTypes.SELECT_POINT:
            return {
                ...state,
                points: state.points.map((point) => {
                    return point.id === action.payload ? {...point, isSelected: !point.isSelected} : point
                })
            };
        case actionTypes.SELECT_LINE:
            return {
                ...state,
                lines: state.lines.map((line) => {
                    return line.id === action.payload ? {...line, isSelected: !line.isSelected} : line
                })
            };
        case actionTypes.UNSELECT_ALL:
            return {
                ...state,
                points: state.points.map((point) => {
                    return {...point, isSelected: false}
                }),
                lines: state.lines.map((line) => {
                    return {...line, isSelected: false}
                })
            };
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