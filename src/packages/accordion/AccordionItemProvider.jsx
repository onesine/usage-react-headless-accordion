import {createContext, useContext, useEffect, useMemo, useState} from "react";
import {AccordionContext} from "./AccordionProvider";

export const AccordionItemContext = createContext({
    accordionRef: null,
    active: false,
    items: [],
    hash: "",
    transition: null,
    alwaysOpen: false,
    toggle: () => {},
});


export const AccordionItemProvider = ({children, isActive}) => {
    const {accordionRef, items, setItems, transition, alwaysOpen} = useContext(AccordionContext);
    const [active, setActive] = useState(false);

    const hash = useMemo(() => {
        return Math.random().toString(36).substring(2, 9);
    }, []);

    useEffect(() => {
        if (!(hash in items)) {
            setItems({...items, [hash]: setActive});
        }
    }, [items]);

    const value = useMemo(() => {
        return {
            accordionRef,
            active,
            toggle: () => setActive(!active),
            items,
            hash,
            transition,
            alwaysOpen,
            isActive
        }
    }, [accordionRef, active, alwaysOpen, hash, isActive, items, transition]);

    return (
        <AccordionItemContext.Provider value={value}>
            {children}
        </AccordionItemContext.Provider>
    );
};