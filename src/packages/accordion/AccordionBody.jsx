import {useContext, useMemo} from "react";
import {AccordionItemContext} from "./AccordionItemProvider";

const AccordionBody = ({children, as}) => {
    const {hash} = useContext(AccordionItemContext);

    const TagName = useMemo(() => {
        if(["div", "ul"].includes(as)) {
            return as;
        }
        return "div";
    }, [as]);

    return (
        <TagName
            id={`content-${hash}`}
            aria-labelledby={`button-${hash}`}
            style={{maxHeight: "0px", transitionProperty: "max-height", overflow: "hidden", transitionDuration: "300ms", transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)"}}
        >
            {children}
        </TagName>
    );
};

export default AccordionBody;