const pointDrawer = (context, point, color) => {
    const size = 6;
    context.fillStyle = color ? color : 'black';
    if(point.isSelected){
        context.fillStyle = 'red'
    }
    context.fillRect(point.x - size/2, point.y - size/2, size, size);
    context.fillStyle = 'black';
};

export default pointDrawer;
