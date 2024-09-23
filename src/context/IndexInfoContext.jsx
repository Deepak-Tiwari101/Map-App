import { createContext, useContext, useState } from "react";

const IndexInfoContext = createContext();

export function IndexInfoProvider({ children }) {
    const [indexInfo, setIndexInfo] = useState({
        startIndex: null,
        endIndex: null,
        blockIndexes: [],
        selectedType: null,
    });
    return (
        <IndexInfoContext.Provider value={{ indexInfo, setIndexInfo }}>
            {children}
        </IndexInfoContext.Provider>
    )
}

export function useIndexInfo() {
    return useContext(IndexInfoContext);
}
