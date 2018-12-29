import React from 'react';
import './Cad.scss';
import CanvasWrapper from "../Canvas/CanvasWrapper";

const cadView = () => {

    return (
        <div id="cad">
            <div className="sidebar"/>
            <div className="canvas">
                <CanvasWrapper/>
            </div>
        </div>
    )

};

export default cadView;