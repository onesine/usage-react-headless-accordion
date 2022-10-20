import {AccordionItemProvider} from "./AccordionItemProvider";
import {useLayoutEffect} from "react";

const AccordionItem = ({children}) => {
    useLayoutEffect(() => {

    }, []);

    return (
        <AccordionItemProvider>
            {children}
        </AccordionItemProvider>
    )
};

export default AccordionItem;