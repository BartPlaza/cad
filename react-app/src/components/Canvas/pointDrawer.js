const pointDrawer = (context, point) => {
    const size = 6;
    context.fillRect(point.x - size/2, point.y - size/2, size, size);
};

export default pointDrawer;
