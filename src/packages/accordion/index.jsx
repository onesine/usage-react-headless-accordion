import React from "react";
import {AccordionProvider} from "./AccordionProvider";

export const Accordion = ({children, as, transition, alwaysOpen}) => {
    return (
        <AccordionProvider as={as} transition={transition} alwaysOpen={alwaysOpen}>
            {children}
        </AccordionProvider>
    );
};

export default Accordion;