import config from '../config';

const formatDimension = (value) => {
  return parseFloat(value).toFixed(config.dimensions.precision);
};

export default formatDimension;