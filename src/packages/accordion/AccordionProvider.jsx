import {createContext, useMemo, useRef, useState} from "react";

export const AccordionContext = createContext({});

export const AccordionProvider = ({children, as = "div", transition = null, alwaysOpen = false}) => {
    const ref = useRef();
    const [items, setItems] = useState({});

    const value = useMemo(() => {
        return {
            accordionRef: ref,
            items,
            setItems,
            transition,
            alwaysOpen
        };
    }, [alwaysOpen, items, transition]);

    const TagName = useMemo(() => {
        if(["div", "ul"].includes(as)) {
            return as;
        }
        return "div";
    }, [as]);

    return (
        <AccordionContext.Provider value={value}>
            <TagName ref={ref}>
                {children}
            </TagName>
        </AccordionContext.Provider>
    );
};