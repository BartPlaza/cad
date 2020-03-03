import generateId from './generateId';
import {DISTANCE} from '../constants/relations';
import getPointsDistance from "../helpers/getPointsDistance";
import {Point} from "./generatePoint";

export type DistanceRelation = {
    id: number,
    type: string,
    point_1: number,
    point_2: number,
    value: number
}

const generateDistanceRelation = (point_1: Point, point_2: Point): DistanceRelation => ({
    id: generateId(),
    type: DISTANCE,
    point_1: point_1.id,
    point_2: point_2.id,
    value: getPointsDistance(point_1, point_2)
});

export default generateDistanceRelation;