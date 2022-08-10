import React from "react";
import { skills } from "../projects/data";


export default function About() {

    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center ">
                <div className="lg:w-3/4 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Chris Cozens
                        <br className="hidden lg:inline-block" />
                        Web developer
                        <br className="hidden lg:inline-block" />
                        Molecular Biology PhD
                    </h1>
                    <p className="mb-8 leading-relaxed">
                    Adam Grant is an expert on how we can find motivation and meaning, and lead more generous and creative lives. As a popular TED speaker and the New York Times bestselling author of three books that have sold over a million copies, he has helped Google, the NBA, and the U.S. Army improve life at work. Adam has been Wharton’s top-rated professor for six straight years, and has been recognized as one of Fortune’s 40 under 40 and the world’s 10 most influential management thinkers. He’s a former magician and junior Olympic springboard diver. 
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

