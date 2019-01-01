const tempLineDrawer = (context, tempLine) => {

    context.lineWidth = 1;
    context.strokeStyle = 'lightgrey';
    context.beginPath();
    context.moveTo(tempLine.start.x, tempLine.start.y);
    context.lineTo(tempLine.end.x, tempLine.end.y);
    context.stroke();
    context.closePath();
    context.strokeStyle = 'white';
    context.lineWidth = 2;
};

export default tempLineDrawer;
