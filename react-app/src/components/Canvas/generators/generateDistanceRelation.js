import generateId from './generateId';
import {DISTANCE} from '../consts/relations';
import getPointsDistance from "../helpers/getPointsDistance";

const generateDistanceRelation = (point_1, point_2) => ({
    id: generateId(),
    type: DISTANCE,
    point_1: point_1.id,
    point_2: point_2.id,
    value: getPointsDistance(point_1, point_2)
});

export default generateDistanceRelation;