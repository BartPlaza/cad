const lineDrawer = (context, line, points, color) => {

    const start = points.filter((point) => point.id === line.start)[0];
    const end = points.filter((point) => point.id === line.end)[0];
    context.lineWidth = 2;
    context.strokeStyle = color ? color : 'white';
    if (line.isSelected) {
        context.strokeStyle = 'red'
    }
    context.beginPath();
    context.moveTo(start.x, start.y);
    context.lineTo(end.x, end.y);
    context.stroke();
    context.closePath();
    context.strokeStyle = 'white'
};

export default lineDrawer;
