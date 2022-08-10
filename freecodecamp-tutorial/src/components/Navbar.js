import React from "react";


export default function Navbar() {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                <nav className="flex space-x-3 max-h-20">
                    <button href="#AboutMe" className="inline-flex text-gray-400 bg-gray-800 border py-2 px-6 focus:outline-none hover_bg-gray-700 hover:text-white rounded text-lg"> About me</button>
                    <button className="inline-flex text-gray-400 bg-gray-800 border py-2 px-6 focus:outline-none hover_bg-gray-700 hover:text-white rounded text-lg"> About this page</button>
                    <button href="#projects"
                        className="inline-flex text-gray-400 bg-gray-800 border py-2 px-6 focus:outline-none hover_bg-gray-700 hover:text-white rounded text-lg">What I'm working on</button>
                    <button href="#FunThings"
                        className="inline-flex text-gray-400 bg-gray-800 border py-2 px-6 focus:outline-none hover_bg-gray-700 hover:text-white rounded text-lg"> Fun things</button>
                    <button
                        className="inline-flex text-gray-400 bg-gray-800 border py-2 px-6 focus:outline-none hover_bg-gray-700 hover:text-white rounded text-lg"> Molecular biology tools</button>

                    <button href="#contact"
                        className="inline-flex text-white bg-green-800 border-2 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Get in touch</button>


                    <a href="https://www.linkedin.com/in/chris-cozens-b2883a45/" target="_blank" rel="noreferrer noopener">
                        <img className="w-20 max-h-20"
                            alt="LinkedIn"
                            src='https://brand.linkedin.com/content/dam/me/brand/en-us/brand-home/logos/In-Blue-Logo.png.original.png' />

                    </a>

                    <a href="https://github.com/ccozens/" target="_blank" rel="noreferrer noopener">

                        <img className="w-20 max-h-20 rounded"
                            alt="GitHub"
                            src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' />

                    </a>
                </nav>

            </div>
        </header>
    )
}