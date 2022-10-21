import React from "react";
import {AccordionProvider} from "./AccordionProvider";

export const Accordion = ({children, as}) => {
    return (
        <AccordionProvider as={as}>
            {children}
        </AccordionProvider>
    );
};

export default Accordion;