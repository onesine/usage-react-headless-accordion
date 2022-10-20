import {createContext, useMemo, useRef, useState} from "react";

export const AccordionContext = createContext({});

export const AccordionProvider = ({children}) => {
    const ref = useRef();
    const [items, setItems] = useState({});

    const value = useMemo(() => {
        return {
            accordionRef: ref,
            items,
            setItems
        };
    }, [items]);

    return (
        <AccordionContext.Provider value={value}>
            <div ref={ref}>
                {children}
            </div>
        </AccordionContext.Provider>
    );
};