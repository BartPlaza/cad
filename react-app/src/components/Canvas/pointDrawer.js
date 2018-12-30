const pointDrawer = (context, point) => {
    const size = 6;
    if(point.isSelected){
        context.fillStyle = 'red'
    }
    context.fillRect(point.x - size/2, point.y - size/2, size, size);
    context.fillStyle = 'black'
};

export default pointDrawer;
