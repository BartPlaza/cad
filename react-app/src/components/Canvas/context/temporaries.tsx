import React, {useContext} from "react";
import {noop} from 'lodash';
import {TemporariesState} from "../../../store/reducers/temporaries";

export type TemporariesContextProps = {
    canvasRef: React.RefObject<HTMLCanvasElement>,
    drawAll(temporariesState: TemporariesState): void
}

const Temporaries = React.createContext<TemporariesContextProps>({
    canvasRef: React.createRef(),
    drawAll: noop
});

export const useTemporariesContext = () => {
    return useContext(Temporaries)
};

export const TemporariesContextProvider = Temporaries.Provider;