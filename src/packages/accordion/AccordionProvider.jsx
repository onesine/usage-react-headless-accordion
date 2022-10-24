import {createContext, useMemo, useRef, useState} from "react";

export const AccordionContext = createContext({});

export const AccordionProvider = ({children, as = "div", transition = null, alwaysOpen = false}) => {
    const accordionRef = useRef();
    const [items, setItems] = useState({});

    const value = useMemo(() => {
        return {
            accordionRef,
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
            <TagName ref={accordionRef}>
                {children}
            </TagName>
        </AccordionContext.Provider>
    );
};