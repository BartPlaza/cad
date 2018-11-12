//Generate classes list string from array of class
export const joinClasses = (names) => {
    names.forEach((name) => {
        return '.' + name;
    });
    return names.join(' ')
};

