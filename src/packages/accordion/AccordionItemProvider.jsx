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
    show: false,
    setShow: () => {}
});


export const AccordionItemProvider = ({children, isActive = false}) => {
    const {accordionRef, items, setItems, transition, alwaysOpen} = useContext(AccordionContext);
    const [active, setActive] = useState(isActive);
    const [show, setShow] = useState(isActive);

    const hash = useMemo(() => {
        return Math.random().toString(36).substring(2, 9);
    }, []);

    useEffect(() => {
        if (!(hash in items)) {
            setItems({...items, [hash]: setActive});
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
            alwaysOpen,
            show,
            disabledShow: () => {
                console.log("exec")
                setShow(false)
            }
        }
    }, [accordionRef, active, alwaysOpen, hash, items, show, setShow, transition]);

    console.log(`${hash}:`, isActive)

    return (
        <AccordionItemContext.Provider value={value}>
            {children}
        </AccordionItemContext.Provider>
    );
};