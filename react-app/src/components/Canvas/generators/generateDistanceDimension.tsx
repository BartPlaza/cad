import generateId from './generateId';
import {DistanceRelation} from "./generateDistanceRelation";

export type DistanceDimension = {
    id: number
    relation_id: number
}

const generateDistanceDimension = (relation: DistanceRelation): DistanceDimension => ({
    id: generateId(),
    relation_id: relation.id,
});

export default generateDistanceDimension;