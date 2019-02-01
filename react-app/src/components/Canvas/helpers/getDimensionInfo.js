import {store} from '../../../index'
import config from "../config";
import {getPointById, getRelationById} from "../../../store/reducers/canvas";
import generateTempPoint from "../generators/generateTempPoint";

const getDimensionInfo = (dimension) => {
    const canvasState = store.getState()['canvas'];
    const relation = getRelationById(canvasState, dimension.relation_id);
    console.log(relation);
    const point_1 = getPointById(canvasState, relation.point_1);
    const point_2 = getPointById(canvasState, relation.point_2);

    const p_1 = generateTempPoint(
        point_1.x + config.dimensions.offset * (point_2.y - point_1.y) / relation.value,
        point_1.y + config.dimensions.offset * (point_1.x - point_2.x) / relation.value
    );

    const p_2 = generateTempPoint(
        point_2.x + config.dimensions.offset * (point_2.y - point_1.y) / relation.value,
        point_2.y + config.dimensions.offset * (point_1.x - point_2.x) / relation.value
    );

    const p_center =  generateTempPoint(
        (p_1.x + p_2.x) / 2,
        (p_1.y + p_2.y) / 2
    );

    return {
        point_1: point_1,
        point_2: point_2,
        p_1: p_1,
        p_2: p_2,
        p_center: p_center,
        relation: relation
    }
};

export default getDimensionInfo