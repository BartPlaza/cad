const lineDrawer = (context, position) => {
    context.beginPath();
    context.moveTo(position.start.x, position.start.y);
    context.lineTo(position.end.x, position.end.y);
    context.stroke();
    context.closePath();
};

export default lineDrawer;
