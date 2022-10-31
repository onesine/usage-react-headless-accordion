import {GitHub} from "./components/icons";
import Title from "./components/Title";
import Sidebar from "./examples/Sidebar";
import FAQ from "./examples/FAQ";
import NestedMenu from "./examples/NestedMenu";

const App = () => {
    return (
        <div className="min-h-screen py-10 w-full">
            <a href="https://github.com/onesine/react-nested-accordion" className="absolute block inline-flex items-center space-x-3 top-6 md:top-10 right-16 font-semibold text-gray-700 transition duration-300 hover:text-gray-900">
                <span className="text-md md:text-lg">GitHub</span>
                <GitHub className="w-5 md:w-7 h-5 md:h-7"/>
            </a>

            <div className="flex flex-col lg:flex-row">
                <div className="flex justify-center lg:justify-end lg:w-1/2">
                    <div className="md:w-4/6">
                        <div className="w-full p-4">
                            <Title>FAQ</Title>

                            <div className="bg-white shadow-lg p-3">
                                <FAQ/>
                            </div>
                        </div>

                        <div className="w-full p-4 mt-4">
                            <Title>Nested Accordion Menu</Title>

                            <div className="bg-white shadow-lg">
                                <NestedMenu/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4 lg:w-1/2">
                    <Title>Multi-level sidebar</Title>
                    <Sidebar/>
                </div>
            </div>
        </div>
    );
};

export default App;