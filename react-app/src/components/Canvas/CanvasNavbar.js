import React from 'react';
import './CanvasNavbar.scss'
import {joinClasses} from "../../helpers/functions";
import * as tools from './consts/tools';
import {selectTool} from "../../store/actions/canvas";
import {connect} from "react-redux";

const canvasNavbar = (props) => {

    const {canvas, selectTool} = props;

    return (
        <div className="wrapper">
            {tools.asArray.map((tool) => {
                let classes = joinClasses(['button', tool ,tool === canvas.tool ? 'is-primary' : null]);
                return <div key={tool} className={classes} onClick={() => selectTool(tool)}>{tool}</div>
            })}
        </div>)
};

const mapStateToProps = (state) => ({
   canvas: state.canvas
});

const mapDispatchToProps = (dispatch) => ({
   selectTool: (payload) => dispatch(selectTool(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(canvasNavbar);