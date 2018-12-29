const lineDrawer = (context, line) => {
    context.beginPath();
    context.moveTo(line.start.x, line.start.y);
    context.lineTo(line.end.x, line.end.y);
    context.stroke();
    context.closePath();
};

export default lineDrawer;
