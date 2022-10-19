import { MainSection } from "./MainSection"
import { BiCodeAlt } from "react-icons/bi"
import { Tec } from "./Tec"
import ts from "../../../public/ts.svg"
import ruby from "../../../public/ruby.svg"
import react from "../../../public/react.svg"
import node from "../../../public/node.svg"
import mongo from "../../../public/mongo.svg"
import postgres from "../../../public/postgres.svg"
import Image from "next/future/image"
import logo from "../../../public/logo.svg"


export const WhatWeDo = () => {

    return (
        <section className="mt-7 lg:mt-40 w-full p-4" >
            <p className="text-4xl font-bold" >O que fazemos</p>

            <p className="text-2xl text-gray-600 font-normal mt-8" >Nós desenvolvemos</p>

            <div className="min-h-[40vh] w-full flex items-center gap-x-6 mt-8" >
                <MainSection />
                <Image src={logo} alt="logo image" className="ml-auto mr-20 hidden lg:block" />
            </div>

            <div className="lg:w-1/3 mt-3 gap-x-4 flex flex-wrap justify-center lg:justify-start" >
                <Tec img={ts} text="Typescript" />
                <Tec img={ruby} text="Ruby" />
                <Tec img={react} text="React" />
                <Tec img={node} text="NodeJs" />
                <Tec img={mongo} text="MongoDB" />
                <Tec img={postgres} text="PostgresSQL" />
            </div>
        </section>
    )
}