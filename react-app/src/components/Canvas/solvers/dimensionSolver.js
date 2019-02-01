import {store} from '../../../index';
import {getDimensionById, getPointById, getRelationById} from "../../../store/reducers/canvas";
import {movePoint, updateRelation} from "../../../store/actions/canvas";

const dimensionSolver = (dimensionId, value) => {
    if(isValid(value)){
        const canvasState = store.getState()['canvas'];
        const dimension = getDimensionById(canvasState, dimensionId);
        const relation = getRelationById(canvasState, dimension.relation_id);
        const point_1 = getPointById(canvasState, relation.point_1);
        const point_2 = getPointById(canvasState, relation.point_2);

        const dx = (point_2.x - point_1.x) / relation.value * value;
        const dy = (point_2.y - point_1.y) / relation.value * value;

        store.dispatch(movePoint({
            id: point_2.id,
            x: point_1.x + dx,
            y: point_1.y + dy
        }));
        store.dispatch(updateRelation({
            id: relation.id,
            value: value
        }));
        return true;
    } else {
        return false
    }
};

const isValid = (value) => {
    if(typeof value !== 'number' || value <= 0) {
        return false
    }
};

export default dimensionSolver;