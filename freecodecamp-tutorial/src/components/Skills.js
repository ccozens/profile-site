import { BadgeCheckIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../projects/data"

export default function Skills() {
    return (
        <section id="#skills">
            <div className="container px-5 py-10 mx-auto">
            
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill) => (
                        <div key={skill.skill} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-800 rounded flex p-4 w-6 h-6 flex-shrink-0 mr-4">
                                <span className="w-6 h-6 flex-shrink-0 mr-4"/>
                                {skill.logo} </span>
                                <span className="title-font font-medium text-white">
                                    {skill.skill}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}