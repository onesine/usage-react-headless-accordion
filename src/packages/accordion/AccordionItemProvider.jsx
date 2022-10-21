import {createContext, useContext, useEffect, useLayoutEffect, useMemo, useState} from "react";
import {AccordionContext} from "./AccordionProvider";

export const AccordionItemContext = createContext({});


export const AccordionItemProvider = ({children}) => {
    const {accordionRef, items, setItems, transition, alwaysOpen} = useContext(AccordionContext);
    const [active, setActive] = useState(false);

    const hash = useMemo(() => {
        return Math.random().toString(36).substring(2, 9);
    }, []);

    useEffect(() => {
        if (!(hash in items)) {
            setItems({...items, [hash]: {active, setActive}});
        }
    }, [active, hash, items, setItems]);

    const value = useMemo(() => {
        return {
            accordionRef,
            active,
            toggle: () => setActive(!active),
            items,
            hash,
            transition,
            alwaysOpen
        }
    }, [accordionRef, active, hash, items, transition, alwaysOpen]);

    return (
        <AccordionItemContext.Provider value={value}>
            {children}
        </AccordionItemContext.Provider>
    );
};