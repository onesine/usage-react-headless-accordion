import {useRef, useContext, useMemo, useEffect, useCallback} from "react";
import {AccordionItemContext} from "./AccordionItemProvider";

const AccordionHeader = ({children, as = "button", className = "", href = "", onClick = null}) => {
    const {hash, active, toggle, items, alwaysOpen, isActive} = useContext(AccordionItemContext);
    const ref = useRef();

    const TagName = useMemo(() => {
        if(["button", "div", "li", "ol", "a"].includes(as)) {
            return as;
        }
        return "button";
    }, [as]);

    useEffect(() => {
        if (isActive && ref && ref.current) {
            toggle()
            ref.current.setAttribute("aria-expanded", "true");
            document.querySelector(`#${ref.current.getAttribute('aria-controls')}`).style.maxHeight = "none";
        }
    }, []);

    useEffect(() => {
        const toggleButton = (button) => {
            let ariaExpanded = button.getAttribute('aria-expanded');
            button.setAttribute('aria-expanded', ariaExpanded === "false" ? "true" : "false");
        }

        const toggleContent = (content) => {
            if (content) {
                const transitionEnd = () => {
                    if(content.style.maxHeight !== "0px") {
                        content.style.maxHeight = "none";
                    }

                    content.removeEventListener('transitionend', transitionEnd);
                }

                content.addEventListener('transitionend', transitionEnd);

                if (content.style.maxHeight === "0px") {
                    content.style.maxHeight = content.scrollHeight+"px";
                } else {
                    content.style.maxHeight = content.scrollHeight+"px";
                    content.style.fmaxHeight = content.scrollHeight+"px";
                    content.style.maxHeight = "0px";
                }
            }
        }

        if (ref && ref.current) {
            const showAccordion = (e) => {
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

            return () => {
                if (ref && ref.current) {
                    ref?.current?.removeEventListener('click', showAccordion);
                }
            };
        }

    }, [TagName, alwaysOpen, items, onClick, toggle]);

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