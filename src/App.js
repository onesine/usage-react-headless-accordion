import Accordion from "./packages/accordion";
import AccordionItem from "./packages/accordion/AccordionItem";
import AccordionHeader from "./packages/accordion/AccordionHeader";
import AccordionBody from "./packages/accordion/AccordionBody";
import {Archive, Chevron, CloseFolder, GitHub, Music, OpenFolder, Picture, Video} from "./components/icons";
import {menu} from "./constants";

const App = () => {
    const printItem = (item, index) => {
        const Title = ({children}) => (
            <span className="ml-2">{children}</span>
        );

        const buttonClass = "w-full flex items-center text-gray-600 border-b p-4";

        const FileTemplate = ({children, index, title}) => (
            <a
                onClick={e => {e.preventDefault()}}
                href={`/picture-${index}`}
                className={buttonClass}
            >
                {children}
                <Title>{title}</Title>
            </a>
        );

        switch (item.type) {
            case "folder":
                return (
                    <AccordionItem key={index}>
                        <AccordionHeader className={buttonClass} href={"/toto"} as={"a"}>
                            {({open}) => (
                                <>
                                    <Chevron
                                        className={`w-7 h-7 transform transition duration-300 ${!open ? '' : ' rotate-90'}`}
                                    />

                                    {open ? (
                                        <OpenFolder className="w-6 h-6"/>
                                    ) : (
                                        <CloseFolder className="w-6 h-6"/>
                                    )}

                                    <Title>{item.title}</Title>
                                </>
                            )}
                        </AccordionHeader>

                        <AccordionBody>
                            <div className="px-4">
                                {item.submenu.map(printItem)}
                            </div>
                        </AccordionBody>
                    </AccordionItem>
                )
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
        <div className="min-h-screen py-10 w-full flex justify-center">
            <a href="https://github.com/onesine/react-nested-accordion" className="absolute block inline-flex items-center space-x-3 top-6 md:top-10 right-16 font-semibold text-gray-700 transition duration-300 hover:text-gray-900">
                <span className="text-md md:text-lg">GitHub</span>
                <GitHub className="w-5 md:w-7 h-5 md:h-7"/>
            </a>


            <div className="w-full md:w-4/6 lg:w-3/6 p-4 mt-8 md:mt-16">
                <h3 className="text-xl md:text-2xl lg:text-4xl mb-6 md:mb-10 font-bold text-gray-700 text-center">Nested Accordion Menu</h3>
                <div className="bg-white shadow-lg">
                    <Accordion>
                        {menu.map(printItem)}
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default App;