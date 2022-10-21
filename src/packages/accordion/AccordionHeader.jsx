import {useLayoutEffect, useRef, useContext, useMemo} from "react";
import {AccordionItemContext} from "./AccordionItemProvider";

const AccordionHeader = ({children, as = "button", className = ""}) => {
    const {hash, active, toggle, items} = useContext(AccordionItemContext);
    const ref = useRef();

    useLayoutEffect(() => {
        if (ref && ref.current) {
            const toggleButton = (button) => {
                let ariaExpanded = button.getAttribute('aria-expanded');
                if (ariaExpanded === "false")
                    ariaExpanded = "true";
                else
                    ariaExpanded = "false";
                button.setAttribute('aria-expanded', ariaExpanded);
            };

            const toggleContent = (content) => {
                if (content) {
                    if (content.style.maxHeight === "0px") {
                        content.style.removeProperty("maxHeight");
                        content.style.maxHeight = content.scrollHeight+"px";
                    } else {
                        content.style.maxHeight = content.scrollHeight+"px";
                        content.style.fmaxHeight = content.scrollHeight+"px";
                        content.style.maxHeight = "0px";
                    }

                    const transitionEnd = () => {
                        if(content.style.maxHeight === "0px") {
                            if (content.style.overflow !== "hidden") {
                                content.style.overflow = "hidden"
                            }
                        } else {
                            content.style.maxHeight = "none";
                        }

                        content.removeEventListener('transitionend', transitionEnd);
                    }

                    content.addEventListener('transitionend', transitionEnd);
                }
            }

            const showAccordion = () => {
                toggle()

                // Close content already open
                const buttons = ref.current.parentNode.querySelectorAll(":scope > button[aria-expanded='true']");
                buttons.forEach(button => {
                    if (button && button !== ref.current) {
                        const id = button.id.split("-")[1];
                        items[id].setActive(false);
                        toggleButton(button);
                        toggleContent(document.querySelector(`#${button.getAttribute('aria-controls')}`));
                    }
                });

                // Toggle Button
                toggleButton(ref.current);

                // Toggle Content
                toggleContent(document.querySelector(`#${ref.current.getAttribute('aria-controls')}`));
            };

            ref.current.addEventListener('click', showAccordion);

            return () => {
                ref.current.removeEventListener('click', showAccordion);
            };
        }

    }, [items, toggle]);

    const TagName = useMemo(() => {
        if(["button", "div", "li", "ol"].includes(as)) {
            return as;
        }
        return "button";
    }, [as]);

    return (
        <TagName
            ref={ref}
            id={`button-${hash}`}
            type="button"
            aria-expanded="false"
            className={className}
            aria-controls={`content-${hash}`}
        >
            {typeof children === "function" ? children({open: active}) : children}
        </TagName>
    );
};


export default AccordionHeader;