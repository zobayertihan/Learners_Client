import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="bg-gray-100">
                <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <p className="mb-2 font-bold">What is cors?
                                </p>
                                <p className="text-sm leading-5 text-gray-900">
                                    An HTTP-header based system called Cross-Origin Resource Sharing (CORS) enables a server to specify any origins (domain, scheme, or port) other than its own from which a browser should be able to load resources.
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <p className="mb-2 font-bold">Why are you using firebase? What other options do you have to implement authentication?</p>
                                <p className="text-sm leading-5 text-gray-900">
                                    I am using firebase to implement authentication and storing user data in the google firebase cloud. And, other options to implement authentications are, Auth0, Amazon Cognito, Okta, MongoDB, JSON Web Token.
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <p className="mb-2 font-bold">How does the private route work?</p>
                                <p className="text-sm leading-5 text-gray-900">
                                    In the event that the user is logged in, the react private route component renders children. The user gets led to the /login page with the return url supplied in the location state attribute if they are not logged in.
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <p className="mb-2 font-bold">What is Node? How does Node work?</p>
                                <p className="text-sm leading-5 text-gray-900">
                                    Node enables programmers to create JavaScript code that executes within the computer's operating system rather than a browser. Node is entirely based on events. The server essentially consists of one thread processing each event one at a time. One type of event is a fresh request being received. When there is a blocked IO action, the server begins processing it and instead of waiting for it to finish, it registers a callback function.
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

export default Blog;