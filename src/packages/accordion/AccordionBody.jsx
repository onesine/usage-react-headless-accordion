import {useContext, useMemo} from "react";
import {AccordionItemContext} from "./AccordionItemProvider";

const AccordionBody = ({children, as}) => {
    const {hash, transition} = useContext(AccordionItemContext);

    const TagName = useMemo(() => {
        if(["div", "ul"].includes(as)) {
            return as;
        }
        return "div";
    }, [as]);

    const transitionData = useMemo(() => {
        const defaultData = {
            duration: "300ms",
            timingFunction: "cubic-bezier(0, 0, 0.2, 1)"
        }

        if (transition && ("duration" in transition) && transition.duration) {
            defaultData.duration = transition.duration;
        }

        if (transition && ("timingFunction" in transition) && transition.timingFunction) {
            defaultData.timingFunction = transition.timingFunction;
        }
        return defaultData;
    }, [transition]);

    return (
        <TagName
            id={`content-${hash}`}
            aria-labelledby={`button-${hash}`}
            style={
                {
                    maxHeight: "0px",
                    transitionProperty: "max-height",
                    overflow: "hidden",
                    transitionDuration: transitionData.duration,
                    transitionTimingFunction: transitionData.timingFunction
                }
            }
        >
            {children}
        </TagName>
    );
};

export default AccordionBody;