const lineDrawer = (context, line) => {

    if(line.isSelected){
        context.strokeStyle = 'red'
    }
    context.beginPath();
    context.moveTo(line.start.x, line.start.y);
    context.lineTo(line.end.x, line.end.y);
    context.stroke();
    context.closePath();
    context.strokeStyle = 'white'
};

export default lineDrawer;
