import {menu} from "../constants";
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";
import {Archive, Chevron, CloseFolder, Music, OpenFolder, Picture, Video} from "../components/icons";

const NestedMenu = () => {
    const printItem = (item, index) => {
        const Title = ({children}) => (
            <span className="ml-2">{children}</span>
        );

        const buttonClass = "w-full flex items-center text-gray-600 border-b py-4 pl-4";

        const FileTemplate = ({children, index, title}) => (
            <div className="pl-8">
                <a
                    onClick={e => {e.preventDefault()}}
                    href={`/picture-${index}`}
                    className={buttonClass}
                >
                    {children}
                    <Title>{title}</Title>
                </a>
            </div>
        );

        switch (item.type) {
            case "folder":
                return (
                    <AccordionItem key={index}>
                        {({open}) => (
                            <>
                                <AccordionHeader className={buttonClass}>
                                    <Chevron
                                        className={`w-7 h-7 transform transition duration-300 ${!open ? '' : ' rotate-90'}`}
                                    />

                                    {open ? (
                                        <OpenFolder className="w-6 h-6"/>
                                    ) : (
                                        <CloseFolder className="w-6 h-6"/>
                                    )}

                                    <Title>{item.title}</Title>
                                </AccordionHeader>

                                <AccordionBody>
                                    <div className="pl-8">
                                        {item.submenu.map(printItem)}
                                    </div>
                                </AccordionBody>
                            </>
                        )}
                    </AccordionItem>
                );
            case "image":
                return (
                    <FileTemplate title={item.title} key={index} index={index}>
                        <Picture className="w-6 h-6"/>
                    </FileTemplate>
                );
            case "video":
                return (
                    <FileTemplate title={item.title} key={index} index={index}>
                        <Video className="w-6 h-6"/>
                    </FileTemplate>
                );
            case "music":
                return (
                    <FileTemplate title={item.title} key={index} index={index}>
                        <Music className="w-6 h-6"/>
                    </FileTemplate>
                );
            case "archive":
                return (
                    <FileTemplate title={item.title} key={index} index={index}>
                        <Archive className="w-6 h-6"/>
                    </FileTemplate>
                );
            default :
                return null;
        }
    };

    return (
        <Accordion as={"ul"} className="bg-gray-100">
            {menu.map(printItem)}
        </Accordion>
    );
};

export default NestedMenu;