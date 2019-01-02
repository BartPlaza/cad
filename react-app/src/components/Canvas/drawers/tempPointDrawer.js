const tempPointDrawer = (context, point) => {
    const size = 6;
    context.fillStyle = 'grey';
    context.fillRect(point.x - size/2, point.y - size/2, size, size);
    context.fillStyle = 'black';
};

export default tempPointDrawer;