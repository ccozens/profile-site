import React from "react";

export default function About() {

    return(
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center border border-sky-500">
                <div className="lg:w-3/4 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        I'm Chris.
                        <br className="hidden lg:inline-block" /> 
                        Molecular Biology PhD
                        <br className="hidden lg:inline-block" /> 
                        learning web development.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I'm a great molecular biologist and now I'm learning react
                    </p>
                    <div className="flex justify-center space-x-3">
                        <button className="inline-flex text-gray-400 bg-gray-800 border py-2 px-6 focus:outline-none hover_bg-gray-700 hover:text-white rounded text-lg"> About me</button>
                        <button className="inline-flex text-gray-400 bg-gray-800 border py-2 px-6 focus:outline-none hover_bg-gray-700 hover:text-white rounded text-lg"> About this page</button>
                        <button href="#projects"
                        className="inline-flex text-gray-400 bg-gray-800 border py-2 px-6 focus:outline-none hover_bg-gray-700 hover:text-white rounded text-lg">
                            What I'm working on
                        </button>
                        <button href="#contact"
                        className="inline-flex text-white bg-green-800 border-2 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Get in touch</button>
                        
                    </div>
                </div>
            <div className="lg:max-w-md md:w-1/2 sm:w-5/6">
                <img className="object-cover object-center rounded-xl"
                alt="Chris"
                src='https://drive.google.com/uc?export=view&id=1GxWGu1VGl-oOOaUzmS3i7YrL24UV-Mop' />
                
            </div>
            </div>

        </section>
    )
}