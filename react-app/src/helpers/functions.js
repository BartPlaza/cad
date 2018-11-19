//Generate classes list string from array of class
export const joinClasses = (names) => {
    names = names.filter((name) => {
        return name !== null;
    });
    return names.join(' ')
};

