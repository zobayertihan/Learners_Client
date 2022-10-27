import React from 'react';

const FAQ = () => {
    return (
        <div>
            <div className="bg-gray-100">
                <h1 className='text-center font-bold text-2xl'>Frequently Asked Questions.</h1>
                <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <p className="mb-2 font-bold"> What is React?
                                </p>
                                <p className="text-sm leading-5 text-gray-900">
                                    It is an open source project released in 2013 by Meta, for building user interfaces (UI). It is based on declarative programming principles, and using components as main entities.
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <p className="mb-2 font-bold">What is JSX?
                                </p>
                                <p className="text-sm leading-5 text-gray-900">

                                    This is an extension for React, which changes syntax to create React elements, which contains both JavaScript code and elements markup for HTML at the same time.
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <p className="mb-2 font-bold"> Why can't browsers read JSX?
                                </p>
                                <p className="text-sm leading-5 text-gray-900">

                                    Because this is a specific form of code which is not fully clear JavaScript or HTML and browsers don't have engines to read it. To make this code understandable for browsers it must be converted with special tools like Babel.
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <p className="mb-2 font-bold"> What is Redux?
                                </p>
                                <p className="text-sm leading-5 text-gray-900">

                                    It is an open-source JavaScript library which is often used with React and other libraries. It improves basic state management and keeps them in storage, which allows to easily check and debug UI elements' behavior.
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <p className="mb-2 font-bold"> How is React different from Angular?
                                </p>
                                <p className="text-sm leading-5 text-gray-900">

                                    React is the JavaScript library, while Angular is the framework which has a more complex structure. Angular has a lot of instruments for all steps of front-end development and uses TypeScript as the main language. React can be used only for UI components development and primarily use JSX in code.
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <p className="mb-2 font-bold"> What are props in React?
                                </p>
                                <p className="text-sm leading-5 text-gray-900">

                                    In React props are the arguments which we send to React components. The most similar thing like this is the function arguments in clear JavaScript. Their main characteristic is immutable - once set they can't be changed. Also they can be used both in functional and in class components.
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <p className="mb-2 font-bold">What is a state in React?
                                </p>
                                <p className="text-sm leading-5 text-gray-900">

                                    It is part of a component which contains data or information about it. It can be changed dynamically and every change will cause component re-render. States can store properties but are available to use only in class components.
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <p className="mb-2 font-bold"> What is an event in React?
                                </p>
                                <p className="text-sm leading-5 text-gray-900">

                                    React has its own alternatives for DOM events. They mean and do the same as the original but their syntax uses the camel case instead lower case in DOM. One important difference is that in React we pass as an event handler a function instead of a string in DOM.
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <p className="mb-2 font-bold"> What are Synthetic events in React?
                                </p>
                                <p className="text-sm leading-5 text-gray-900">

                                    These are the events which are cross-browser and used to initiate events in browsers according to DOM. As some events which realize the same action, may have different names in different browsers, React allows to create events which will be versatile for all browsers. These events are called Synthetic events. Examples of Synthetic events: onClick, onChange etc.
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <p className="mb-2 font-bold"> How is React different from React Native?
                                </p>
                                <p className="text-sm leading-5 text-gray-900">

                                    React is the JavaScript library which is oriented on creating UI parts of websites, using a DOM compatible approach. Instead of this React Native is the framework for developing cross-platform apps, especially for mobile platforms. It is also based on JavaScript and even has something like React library in structure but also it supports code integration on some other languages. Also it may require integration with SDK for target mobile platforms, like Android Studio.
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;