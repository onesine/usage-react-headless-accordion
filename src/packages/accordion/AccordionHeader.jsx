import {useRef, useContext, useMemo, useEffect} from "react";
import {AccordionItemContext} from "./AccordionItemProvider";

const AccordionHeader = ({children, as = "button", className = "", href = "", onClick = null}) => {
    const {hash, active, toggle, items, alwaysOpen, show, disabledShow} = useContext(AccordionItemContext);
    const ref = useRef();

    const TagName = useMemo(() => {
        if(["button", "div", "li", "ol", "a"].includes(as)) {
            return as;
        }
        return "button";
    }, [as]);

    useEffect(() => {
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

            const showAccordion = (e) => {
                disabledShow();
                disabledShow();

                // Pervent default
                if (TagName === "a") {
                    e.preventDefault();
                }

                toggle()

                if (!alwaysOpen) {
                    // Close content already open
                    const buttons = ref.current.parentNode.querySelectorAll(`:scope > ${TagName}[aria-expanded='true']`);
                    buttons.forEach(button => {
                        if (button && button !== ref.current) {
                            const id = button.id.split("-")[1];
                            items[id](false);
                            toggleButton(button);
                            toggleContent(document.querySelector(`#${button.getAttribute('aria-controls')}`));
                        }
                    });
                }

                // Toggle Button
                toggleButton(ref.current);

                // Toggle Content
                toggleContent(document.querySelector(`#${ref.current.getAttribute('aria-controls')}`));

                if (onClick) {
                    onClick(e);
                }
            };

            ref.current.addEventListener('click', showAccordion);

            if (show) {
                ref.current.setAttribute("aria-expanded", "true")
            }

            return () => {
                if (ref && ref.current) {
                    ref?.current?.removeEventListener('click', showAccordion);
                }
            };
        }

    }, [TagName, alwaysOpen, items, onClick, show, disabledShow, toggle]);

    if (TagName === "a") {
        return (
            <TagName
                ref={ref}
                id={`button-${hash}`}
                href={href}
                aria-expanded="false"
                className={className}
                aria-controls={`content-${hash}`}
            >
                {typeof children === "function" ? children({open: active}) : children}
            </TagName>
        );
    }

    return (
        <TagName
            ref={ref}
            id={`button-${hash}`}
            aria-expanded="false"
            className={className}
            aria-controls={`content-${hash}`}
        >
            {typeof children === "function" ? children({open: active}) : children}
        </TagName>
    );
};


export default AccordionHeader;