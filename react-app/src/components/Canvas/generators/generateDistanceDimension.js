import generateId from './generateId';

const generateDistanceDimension = (relation) => ({
    id: generateId(),
    relation_id: relation.id,
});

export default generateDistanceDimension;