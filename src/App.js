import Accordion from "./packages/accordion";
import AccordionItem from "./packages/accordion/AccordionItem";
import AccordionHeader from "./packages/accordion/AccordionHeader";
import AccordionBody from "./packages/accordion/AccordionBody";
import {Chevron, CloseFolder, GitHub, OpenFolder, Picture} from "./components/icons";
import {menu} from "./constants";

const App = () => {
    const printItem = (item, index) => {
        const Title = ({children}) => (
            <span className="ml-2">{children}</span>
        );

        const buttonClass = "w-full flex items-center text-gray-600 border-b p-4";

        switch (item.type) {
            case "group":
                return (
                    <AccordionItem key={index} isActive={"isActive" in item ? item.isActive : false}>
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
                    <a
                        key={index}
                        onClick={e => {e.preventDefault()}}
                        href={`/picture-${index}`}
                        className={buttonClass}
                    >
                        <Picture className="w-6 h-6"/>
                        <Title>{item.title}</Title>
                    </a>
                )
            default :
                return null;
        }
    };

    return (
        <div className="min-h-screen py-10 w-full flex justify-center">
            <a href="https://github.com/onesine/react-nested-accordion" className="absolute block inline-flex items-center space-x-3 top-10 right-16 text-lg font-semibold text-gray-700 transition duration-300 hover:text-gray-900">
                <span>GitHub</span>
                <GitHub className="w-7 h-7"/>
            </a>


            <div className="w-3/6 p-8 mt-16">
                <h3 className="text-4xl mb-10 font-bold text-gray-700 text-center">Nested Accordion Menu</h3>
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