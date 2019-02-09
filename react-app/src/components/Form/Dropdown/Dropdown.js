import React, {useEffect, useState, useRef} from 'react';
import './Dropdown.scss';
import {Manager, Reference, Popper} from 'react-popper';
import {joinClasses} from "../../../helpers/functions";

const Dropdown = props => {

    const [isVisible, setIsVisible] = useState(false);

    const show = () => {
        setIsVisible((prev) => !prev);
    };

    const classNames = joinClasses(['dropdown', isVisible ? 'open' : null]);

    return (
        <div className={classNames}>
            <Manager>
                <Reference>
                    {({ref}) => (
                        <button ref={ref} className="btn btn-default dropdown-toggle" type="button" onClick={show}>
                            Dropdown
                            <span className="caret"></span>
                        </button>
                    )}
                </Reference>
                <Popper placement={"bottom-start"}>
                    {({ ref, style, placement, arrowProps }) => (
                        <ul ref={ref} style={{...style, margin: '0', listStyle: 'none'}} data-placement={placement} className="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li ><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" className="divider"></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    )}
                </Popper>
            </Manager>
        </div>
    );
};

Dropdown.propTypes = {};

export default Dropdown;
