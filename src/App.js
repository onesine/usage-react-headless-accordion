import {GitHub} from "./components/icons";
import NestedMenu from "./examples/NestedMenu";
import Title from "./components/Title";
import FAQ from "./examples/FAQ";

const App = () => {


    return (
        <div className="min-h-screen py-10 w-full flex flex-col items-center justify-center">
            <a href="https://github.com/onesine/react-nested-accordion" className="absolute block inline-flex items-center space-x-3 top-6 md:top-10 right-16 font-semibold text-gray-700 transition duration-300 hover:text-gray-900">
                <span className="text-md md:text-lg">GitHub</span>
                <GitHub className="w-5 md:w-7 h-5 md:h-7"/>
            </a>

            <div className="w-full md:w-4/6 lg:w-3/6 p-4 mt-8 md:mt-16">
                <Title>FAQ</Title>

                <div className="bg-white shadow-lg p-3">
                    <FAQ/>
                </div>
            </div>

            <div className="w-full md:w-4/6 lg:w-3/6 p-4 mt-4">
                <Title>Nested Accordion Menu</Title>

                <div className="bg-white shadow-lg">
                    <NestedMenu/>
                </div>
            </div>
        </div>
    );
};

export default App;