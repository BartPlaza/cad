import * as actionTypes from '../actions/actionTypes';

const initialState = {
    points: [],
    lines: [],
    relations: [],
    dimensions: [],
    tool: null,
};

const canvasReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_POINT:
            return {
                ...state,
                points: pointExists(state.points, action.payload) ? state.points : state.points.concat([action.payload])
            };
        case actionTypes.MOVE_POINT: {
            const {id, x, y} = action.payload;
            console.log(action.payload);
            return {
                ...state,
                points: state.points.map((point) => point.id === id ? {...point, x: x, y: y} : point
                )
            }
        }
        case actionTypes.REMOVE_POINTS:
            return {
                ...state,
                points: state.points.filter((point) => !action.payload.includes(point.id) || pointCanNotBeRemoved(point, state))
            };
        case actionTypes.JOIN_POINTS:
            const {fromId, toId} = action.payload;
            return {
                ...state,
                lines: state.lines.map((line) => {
                    if (isUsedInLines(fromId, [line])) {
                        return {
                            ...line,
                            start: line.start === fromId ? toId : line.start,
                            end: line.end === fromId ? toId : line.end,
                        }
                    } else {
                        return line;
                    }
                }),
                points: state.points.filter((point) => point.id !== fromId)
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
        case actionTypes.ADD_RELATION:
            return {
                ...state,
                relations: [
                    ...state.relations,
                    action.payload
                ]
            };
        case actionTypes.ADD_DIMENSION:
            return {
                ...state,
                dimensions: [
                    ...state.dimensions,
                    action.payload
                ]
            };
        case actionTypes.UPDATE_DIMENSION: {
            const {id, newDimension} = action.payload;
            return {
                ...state,
                dimensions: state.dimensions.map((dimension) => {
                    return dimension.id === id ? newDimension : dimension;
                })
            }
        }
        case actionTypes.UPDATE_RELATION: {
            const {id, value} = action.payload;
            return {
                ...state,
                relations: state.relations.map((relation) => {
                    return relation.id === id ? {...relation, value: value} : relation;
                })
            }
        }
        default:
            return state;
    }
};

export const getPoints = (state) => state.points;

export const getPointById = (state, id) => {
    return state.points.filter((point) => point.id === id)[0];
};

export const getLines = (state) => state.lines;

export const getDimensions = (state) => state.dimensions;

export const getDimensionById = (state, id) => {
    return state['dimensions'].filter((dimension) => dimension.id === id)[0];
};

export const getRelationById = (state, id) => {
    return state.relations.filter((relation) => relation.id === id)[0];
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