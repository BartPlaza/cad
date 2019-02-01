
const getPointsDistance = (point_1, point_2) => {
    const dx = Math.abs(point_1.x - point_2.x);
    const dy = Math.abs(point_1.y - point_2.y);
    return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
};

export default getPointsDistance;