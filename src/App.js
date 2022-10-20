import Accordion from "./packages/accordion";
import AccordionItem from "./packages/accordion/AccordionItem";
import AccordionHeader from "./packages/accordion/AccordionHeader";
import AccordionBody from "./packages/accordion/AccordionBody";

const App = () => {
    return (
        <div className="min-h-screen py-10 bg-gray-200 w-full flex items-center justify-center">
            <div className="w-3/6 bg-white p-8">
                <Accordion>
                    <AccordionItem>
                        <AccordionHeader>
                            {({open}) => (
                                <>
                                    Title 1
                                    <svg className={`w-6 h-6 transform transition duration-300 ${!open ? '' : ' rotate-90'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                </>
                            )}
                        </AccordionHeader>

                        <AccordionBody>
                            <div className="p-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid deleniti dolor, dolore minima molestias quos recusandae! Consectetur consequuntur delectus doloremque explicabo illum ipsa, nisi perferendis recusandae sapiente sit veniam!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid deleniti dolor, dolore minima molestias quos recusandae! Consectetur consequuntur delectus doloremque explicabo illum ipsa, nisi perferendis recusandae sapiente sit veniam!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid deleniti dolor, dolore minima molestias quos recusandae! Consectetur consequuntur delectus doloremque explicabo illum ipsa, nisi perferendis recusandae sapiente sit veniam!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid deleniti dolor, dolore minima molestias quos recusandae! Consectetur consequuntur delectus doloremque explicabo illum ipsa, nisi perferendis recusandae sapiente sit veniam!
                            </div>
                        </AccordionBody>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionHeader>
                            {({open}) => (
                                <>
                                    Title 2
                                    <svg className={`w-6 h-6 transform transition duration-300 ${!open ? '' : ' rotate-90'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                </>
                            )}
                        </AccordionHeader>

                        <AccordionBody>
                            <div className="p-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid deleniti dolor, dolore minima molestias quos recusandae! Consectetur consequuntur delectus doloremque explicabo illum ipsa, nisi perferendis recusandae sapiente sit veniam!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid deleniti dolor, dolore minima molestias quos recusandae! Consectetur consequuntur delectus doloremque explicabo illum ipsa, nisi perferendis recusandae sapiente sit veniam!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid deleniti dolor, dolore minima molestias quos recusandae! Consectetur consequuntur delectus doloremque explicabo illum ipsa, nisi perferendis recusandae sapiente sit veniam!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid deleniti dolor, dolore minima molestias quos recusandae! Consectetur consequuntur delectus doloremque explicabo illum ipsa, nisi perferendis recusandae sapiente sit veniam!
                            </div>
                        </AccordionBody>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionHeader>
                            {({open}) => (
                                <>
                                    Title 3
                                    <svg className={`w-6 h-6 transform transition duration-300 ${!open ? '' : ' rotate-90'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                </>
                            )}
                        </AccordionHeader>

                        <AccordionBody>
                            <div className="p-4">
                                <AccordionItem>
                                    <AccordionHeader>
                                        {({open}) => (
                                            <>
                                                {console.log("coucou")}
                                                Title 1
                                                <svg className={`w-6 h-6 transform transition duration-300 ${!open ? '' : ' rotate-90'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                            </>
                                        )}
                                    </AccordionHeader>

                                    <AccordionBody>
                                        <div className="p-4">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid deleniti dolor, dolore minima molestias quos recusandae! Consectetur consequuntur delectus doloremque explicabo illum ipsa, nisi perferendis recusandae sapiente sit veniam!
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid deleniti dolor, dolore minima molestias quos recusandae! Consectetur consequuntur delectus doloremque explicabo illum ipsa, nisi perferendis recusandae sapiente sit veniam!
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid deleniti dolor, dolore minima molestias quos recusandae! Consectetur consequuntur delectus doloremque explicabo illum ipsa, nisi perferendis recusandae sapiente sit veniam!
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid deleniti dolor, dolore minima molestias quos recusandae! Consectetur consequuntur delectus doloremque explicabo illum ipsa, nisi perferendis recusandae sapiente sit veniam!
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionHeader>
                                        {({open}) => (
                                            <>
                                                Title 2
                                                <svg className={`w-6 h-6 transform transition duration-300 ${!open ? '' : ' rotate-90'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                            </>
                                        )}
                                    </AccordionHeader>

                                    <AccordionBody>
                                        <div className="p-4">
                                            <AccordionItem>
                                                <AccordionHeader>
                                                    {({open}) => (
                                                        <>
                                                            Title 1
                                                            <svg className={`w-6 h-6 transform transition duration-300 ${!open ? '' : ' rotate-90'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                                        </>
                                                    )}
                                                </AccordionHeader>

                                                <AccordionBody>
                                                    <div className="p-4">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid deleniti dolor, dolore minima molestias quos recusandae! Consectetur consequuntur delectus doloremque explicabo illum ipsa, nisi perferendis recusandae sapiente sit veniam!
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid deleniti dolor, dolore minima molestias quos recusandae! Consectetur consequuntur delectus doloremque explicabo illum ipsa, nisi perferendis recusandae sapiente sit veniam!
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid deleniti dolor, dolore minima molestias quos recusandae! Consectetur consequuntur delectus doloremque explicabo illum ipsa, nisi perferendis recusandae sapiente sit veniam!
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid deleniti dolor, dolore minima molestias quos recusandae! Consectetur consequuntur delectus doloremque explicabo illum ipsa, nisi perferendis recusandae sapiente sit veniam!
                                                    </div>
                                                </AccordionBody>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionHeader>
                                                    {({open}) => (
                                                        <>
                                                            Title 2
                                                            <svg className={`w-6 h-6 transform transition duration-300 ${!open ? '' : ' rotate-90'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                                        </>
                                                    )}
                                                </AccordionHeader>

                                                <AccordionBody>
                                                    <div className="p-4">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid deleniti dolor, dolore minima molestias quos recusandae! Consectetur consequuntur delectus doloremque explicabo illum ipsa, nisi perferendis recusandae sapiente sit veniam!
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid deleniti dolor, dolore minima molestias quos recusandae! Consectetur consequuntur delectus doloremque explicabo illum ipsa, nisi perferendis recusandae sapiente sit veniam!
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid deleniti dolor, dolore minima molestias quos recusandae! Consectetur consequuntur delectus doloremque explicabo illum ipsa, nisi perferendis recusandae sapiente sit veniam!
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid deleniti dolor, dolore minima molestias quos recusandae! Consectetur consequuntur delectus doloremque explicabo illum ipsa, nisi perferendis recusandae sapiente sit veniam!
                                                    </div>
                                                </AccordionBody>
                                            </AccordionItem>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                            </div>
                        </AccordionBody>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default App;