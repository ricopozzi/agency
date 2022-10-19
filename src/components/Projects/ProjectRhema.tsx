import Image from "next/future/image"
import { Tec } from "../WhatWeDo/Tec";
import ts from "../../../public/ts.svg"
import react from "../../../public/react.svg"
import next from "../../../public/next.svg"
import supalogo from "../../../public/supalogo.svg"

interface ProjectProps {
    imgSource: any;
    text: string;
    title: string
}

export const ProjectRhema = ({imgSource, text, title}: ProjectProps) => {

    return (
       <div
       className="w-11/12 mx-auto flex flex-col item-center lg:flex-row gap-x-10"
       >
        <Image src={imgSource} width={240} alt="" className="drop-shadow-2xl mx-auto " />

        <div
        className="lg:w-1/2 mt-10 lg:mt-0 min-h-[40vh] flex flex-col justify-center items-center gap-y-8"
        >
        <p className="font-bold text-xl mr-auto" >{title}</p>

        <p className="text-left text-lg font-light text-neutral-600" >{text}</p>

        <p className="mr-auto font-bold" >Tecnologias</p>

       <div className="flex flex-wrap gap-x-3" >
       <Tec 
        img={ts}
        text={'Typescript'} 
        />
        <Tec 
        img={react}
        text={'React-Native'} 
        />
        <Tec 
        img={next}
        text={'NextJs'} 
        />
        <Tec 
        img={supalogo}
        text={'Supabase'} 
        />
       </div>
        </div>

       </div>

    )
}