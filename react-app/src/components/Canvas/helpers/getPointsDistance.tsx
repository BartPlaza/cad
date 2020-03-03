import {Point} from "../generators/generatePoint";

const getPointsDistance = (point_1: Point, point_2: Point): number => {
    const dx: number = Math.abs(point_1.x - point_2.x);
    const dy: number = Math.abs(point_1.y - point_2.y);
    return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
};

export default getPointsDistance;