import {Point} from "./generatePoint";

export type TempLine = {
    start: Point,
    end: Point
}

const generateTempLine = (start: Point, end: Point): TempLine => ({
    start: start,
    end: end,
});

export default generateTempLine