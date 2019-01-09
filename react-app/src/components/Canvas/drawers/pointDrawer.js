import { store } from '../../../index'
import {getScale} from "../../../store/reducers/camera";

const pointDrawer = (context, point, color) => {

    const scale = getScale(store.getState()['camera']);
    const size = 6 / scale;
    context.fillStyle = color ? color : 'black';
    if(point.isSelected){
        context.fillStyle = 'red'
    }
    context.fillRect(point.x - size/2, point.y - size/2, size, size);
    context.fillStyle = 'black';
};

export default pointDrawer;
