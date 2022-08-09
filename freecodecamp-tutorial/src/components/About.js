import React from "react";

export default function About() {

    return(
        <section id="about">
            <div className="containers mx-auto flex px-10 py-20 md:flax-row flex-col items-center">
                <div className="lg:flex-frow md:w-1/2 lg:pr-24 md_pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Chris
                        <br className="hidden lg:inline-block" /> I'm learning!
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I'm a great molecular biologist and now I'm learning react
                    </p>
                    <div className="flex justify-center">
                        <a href="#contact"
                        className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Work with me</a>
                        <a href="#projects"
                        className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover_bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img className="object-cover object-center rounded-xl"
                alt="Chris"
                src='https://drive.google.com/uc?export=view&id=1GxWGu1VGl-oOOaUzmS3i7YrL24UV-Mop' />
                
            </div>
            </div>

        </section>
    )
}