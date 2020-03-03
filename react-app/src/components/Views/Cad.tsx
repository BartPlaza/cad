import React from 'react';
import './Cad.scss';
import CanvasNavbar from "../Canvas/CanvasNavbar";
import Canvas from "../Canvas/Canvas";
import CanvasService from "../Canvas/services/CanvasService";
import ToolService from "../Canvas/services/ToolService";
import TemporariesCanvas from "../Canvas/TemporariesCanvas";
import TemporariesService from "../Canvas/services/TemporariesService";

const cadView: React.FunctionComponent = () => {
    return (
        <div id="cad">
            <div className="canvasSidebar"/>
            <div className="canvasWrapper">
                <div className="canvasNavbar">
                    <CanvasNavbar/>
                </div>
                <div id="workspace">
                    <ToolService>
                        <CanvasService>
                            <Canvas/>
                        </CanvasService>
                        <TemporariesService>
                            <TemporariesCanvas/>
                        </TemporariesService>
                    </ToolService>
                </div>
            </div>
        </div>
    )
};

export default cadView;