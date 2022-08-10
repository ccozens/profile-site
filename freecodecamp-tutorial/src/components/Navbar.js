import React from "react";


export default function Navbar() {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                
                <nav className="flex space-x-3">
                    <button className="inline-flex text-gray-400 bg-gray-800 border py-2 px-6 focus:outline-none hover_bg-gray-700 hover:text-white rounded text-lg"> About me</button>
                    <button className="inline-flex text-gray-400 bg-gray-800 border py-2 px-6 focus:outline-none hover_bg-gray-700 hover:text-white rounded text-lg"> About this page</button>
                    <button href="#projects"
                        className="inline-flex text-gray-400 bg-gray-800 border py-2 px-6 focus:outline-none hover_bg-gray-700 hover:text-white rounded text-lg">What I'm working on</button>

                    <button href="#contact"
                        className="inline-flex text-white bg-green-800 border-2 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Get in touch</button>
                </nav>

            </div>
        </header>
    )
}