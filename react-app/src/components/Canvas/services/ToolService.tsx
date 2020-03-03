import * as React from "react";
import {ToolContextProvider} from "../context/tool";
import {ToolTypes} from "../constants/tools";
import {GlobalState} from "../../../store/reducer";
import useLineTool from "../hooks/useLineTool";
import {useSelector} from "react-redux";
import {Point} from "../generators/generatePoint";
import {TempLine} from "../generators/generateTempLine";

export type Tool = {
    name: ToolTypes,
    onClick(event: React.MouseEvent): void,
    onMouseMove(event: React.MouseEvent): void,
}

const ToolService: React.FunctionComponent = ({children}) => {

    const tool = useSelector((state: GlobalState) => state.canvas.tool) || ToolTypes.LINE;

    const ToolsMap: { [key in ToolTypes]: Tool } = {
        [ToolTypes.LINE]: useLineTool(),
        [ToolTypes.SELECT]: useLineTool()
    };

    const toolContext = ToolsMap[tool];

    return (
        <ToolContextProvider value={toolContext}>
            {children}
        </ToolContextProvider>
    )
};


export default ToolService;