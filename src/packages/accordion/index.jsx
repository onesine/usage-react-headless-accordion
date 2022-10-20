import React from "react";
import {AccordionProvider} from "./AccordionProvider";

const Accordion = ({children}) => {
    return (
        <AccordionProvider>
            {children}
        </AccordionProvider>
    );
};

export default Accordion;