import React, {useState, useRef, useEffect} from 'react';
//import './Tags.scss';
import PropTypes from 'prop-types';
import {joinClasses} from '../../../helpers/functions';

const Tags = (props) => {

    const {value, id, label, tagLength, setValue} = props;

    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const shouldAddTag = (val) => {
        return val !== '' && val.length >= tagLength && !(value.includes(val));
    };

    const addTag = (event) => {
        if (event.key === 'Enter' && shouldAddTag(inputValue)) {
            setValue([...value, inputValue]);
            setInputValue('');
        }
    };

    const removeTag = (val) => {
        const updatedTags = [...value].filter((tag) => tag !== val);
        setValue(updatedTags);
    };

    const focusInput = () => {
        inputRef.current.focus();
        setIsFocused(true);
    };

    const containerClasses = joinClasses(['th-tags__container', 'form-control', isFocused ? 'has-focus' : null]);

    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <div className={containerClasses} tabIndex={0} onFocus={focusInput}>
                {value.map((tag) =>
                    <span className="th-tags__tag" key={tag}>{tag}
                        <i className="fal fa-times" onClick={() => removeTag(tag)}/>
                        </span>
                )}
                <input
                    id={id}
                    type="text"
                    className="th-input th-tags__input"
                    onBlur={(e) => setIsFocused(e.target.value)}
                    onKeyPress={addTag}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    ref={inputRef}
                />
            </div>
        </div>
    );
};

Tags.propTypes = {
    value: PropTypes.array.isRequired,
    tagLength: PropTypes.number,
};

Tags.defaultProps = {
    tagLength: 3,
    value: []
};

export default Tags;