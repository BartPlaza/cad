import config from '../config';

const getTextSize = (text) => {
    const element = document.createElement('canvas');
    const context = element.getContext('2d');
    context.font = config.dimensions.fontSize + 'pt ' + config.dimensions.fontFamily;
    return {
        width: context.measureText(text).width,
        height: config.dimensions.fontSize / 0.75
    };
};

export default getTextSize;