import Image from "next/future/image"
import ts from "../../../public/ts.svg"
import next from "../../../public/next.svg"
import supalogo from "../../../public/supalogo.svg"
import stripe from "../../../public/stripe.svg"
import { Tec } from "../WhatWeDo/Tec"

interface FeedbakProps {
    title: string;
    text: string;
    imgSource: any;
}

export const FeedbakProject = ({title, imgSource, text}: FeedbakProps) => {

    return (
        <div
       className="w-11/12 mx-auto flex flex-col item-center lg:flex-row gap-x-10"
       >
        <Image src={imgSource} width={500} alt=""  className="rounded-2xl" />

        <div
        className="lg:w-1/2 min-h-[40vh] flex flex-col justify-center items-center gap-y-8"
        >
        <p className="font-bold text-xl mt-10 lg:mt-0 mr-auto" >{title}</p>

        <p className="text-left text-lg font-light text-neutral-600" >{text}</p>

        <p className="mr-auto font-bold" >Tecnologias</p>

       <div className="flex flex-wrap gap-x-3" >
       <Tec 
        img={ts}
        text={'Typescript'} 
        />
        <Tec 
        img={next}
        text={'NextJs'} 
        />
        <Tec 
        img={supalogo}
        text={'Supabase'} 
        />
         <Tec 
        img={stripe}
        text={'Stripe'} 
        />
       </div>
        </div>

       </div>
    )
}