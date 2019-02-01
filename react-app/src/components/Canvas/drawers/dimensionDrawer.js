import {store} from '../../../index'
import config from '../config';
import {getScale} from "../../../store/reducers/camera";
import formatDimension from "../helpers/formatDimension";
import getTextSize from "../helpers/getTextSize";
import getDimensionInfo from "../helpers/getDimensionInfo";

const dimensionDrawer = (context, dimension, color) => {

    const cameraState = store.getState()['camera'];
    const scale = getScale(cameraState);
    const {point_1, point_2, p_1, p_2, p_center, relation} = getDimensionInfo(dimension);

    context.lineWidth = 1 / scale;
    context.strokeStyle = color ? color : 'black';
    context.fillStyle = color ? color : "black";
    context.font = config.dimensions.fontSize + "pt " + config.dimensions.fontFamily;
    context.textAlign = "center";
    context.textBaseline = "middle";

    context.beginPath();
    context.moveTo(p_1.x, p_1.y);
    context.lineTo(p_2.x, p_2.y);
    context.stroke();
    context.closePath();

    const text = formatDimension(relation.value);
    const textSize = getTextSize(text);
    context.clearRect(p_center.x - textSize.width / 2, p_center.y - textSize.height / 2, textSize.width, textSize.height);
    context.fillText(text, p_center.x, p_center.y);

    context.beginPath();
    context.moveTo(point_1.x, point_1.y);
    context.lineTo(p_1.x, p_1.y);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(point_2.x, point_2.y);
    context.lineTo(p_2.x, p_2.y);
    context.stroke();
    context.closePath();
};

export default dimensionDrawer;
