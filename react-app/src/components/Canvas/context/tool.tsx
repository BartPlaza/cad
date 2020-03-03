import React, {useContext} from "react";
import {ToolTypes} from "../constants/tools";
import {noop} from 'lodash'

export type ToolContextProps = {
    name: ToolTypes,
    onClick(event: React.MouseEvent): void,
    onMouseMove(event: React.MouseEvent): void,
}

const Tool = React.createContext<ToolContextProps>({
    name: ToolTypes.LINE,
    onClick: noop,
    onMouseMove: noop
});

export const useToolContext = () => {
    return useContext(Tool)
};

export const ToolContextProvider = Tool.Provider;