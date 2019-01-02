import React from 'react';
import './Cad.scss';
import LineTool from "../Canvas/tools/LineTool";
import CanvasNavbar from "../Canvas/CanvasNavbar";
import * as tools from "../Canvas/consts/tools";
import {connect} from "react-redux";
import SelectTool from "../Canvas/tools/SelectTool";
import MultiLineTool from "../Canvas/tools/MultiLineTool";

const cadView = (props) => {

    const {canvas} = props;

    const toolsMap = {
        [tools.LINE]: <LineTool/>,
        [tools.SELECT]: <SelectTool/>,
        [tools.MULTILINE]: <MultiLineTool/>
    };

    const renderCanvasForTool = (tool) => {
        const toolComponent = toolsMap[tool];
        return toolComponent ? toolComponent : <LineTool/>;
    };


    return (
        <div id="cad">
            <div className="canvasSidebar"/>
            <div className="canvasWrapper">
                <div className="canvasNavbar">
                    <CanvasNavbar/>
                </div>
                <div className="canvas">
                    {renderCanvasForTool(canvas.tool)}
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    canvas: state.canvas
});

export default connect(mapStateToProps)(cadView);