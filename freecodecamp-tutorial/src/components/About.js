import React from "react";
import { skills } from "../resources/data";
import { aboutMeBlurb } from "../resources/aboutMeBlurb";


export default function About() {

    return (
        <section id="AboutMe">
            <div className="py-10 w-full text-center text-4xl text-slate-900 bg-sky-300"> this is a work in progress</div>
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center ">
                <div className="lg:w-3/4 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Chris Cozens
                        <br className="inline-block" />
                        Web developer
                        <br className="inline-block" />
                        Molecular biology PhD
                    </h1>
                    <p className="mb-8 leading-relaxed text-justify">
                    I am an experienced scientist with 13-year track record in successfully conceiving, planning and delivering R&D projects as individual contributor and team lead; <a className="text-blue-400 hover:text-blue-600 visited:text-purple-400" href='https://scholar.google.co.uk/citations?user=QgWbg-QAAAAJ&hl=en&oi=ao' target='blank_' rel='noreferrer noopener'> publishing in top tier journals</a> and <a className="text-blue-400 hover:text-blue-600 visited:text-purple-400" href='https://patents.google.com/?inventor=Chris+Cozens,Christopher+Cozens' target='blank_' rel='noreferrer noopener'>filing 3 patents</a>. I was motivated by developing understanding and enabling others through creating novel methods and functionality in biology. That same drive now motivates me as I learn data science and web development. 
                    
                    </p>

                </div>
                <div className="lg:max-w-md md:w-1/2 sm:w-5/6 ">
                    <img className="object-cover object-center rounded-xl"
                        alt="Chris"
                        src='https://drive.google.com/uc?export=view&id=1GxWGu1VGl-oOOaUzmS3i7YrL24UV-Mop' />

                    <div className="flex flex-row justify-evenly mt-8">
                        {skills.map((skill) => (
                            <div key={skill.skill} className="">

                                <img className="inline-flex w-11 max-h-5"
                                    alt={skill.skill}
                                    src={skill.logo} />
                                {skill.skill}


                            </div>
                        ))}
                    </div>

                </div>


            </div>

        </section>
    )
}

