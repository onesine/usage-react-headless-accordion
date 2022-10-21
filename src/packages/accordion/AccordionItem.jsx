import {AccordionItemProvider} from "./AccordionItemProvider";

const AccordionItem = ({children, isActive = false}) => {
    return (
        <AccordionItemProvider isActive={isActive}>
            {children}
        </AccordionItemProvider>
    )
};

export default AccordionItem;