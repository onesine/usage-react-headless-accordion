import {useContext} from "react";
import {AccordionItemContext} from "./AccordionItemProvider";

const AccordionBody = ({children}) => {
    const {hash} = useContext(AccordionItemContext);
    return (
        <div
            id={`content-${hash}`}
            aria-labelledby={`button-${hash}`}
            style={{maxHeight: "0px", transitionProperty: "max-height", overflow: "hidden", transitionDuration: "300ms", transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)"}}
        >
            {children}
        </div>
    );
};

export default AccordionBody;