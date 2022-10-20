import { useCallback, useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ProjectRhema } from "./ProjectRhema"
import rhemaiphone from "../../../public/rhemaiphone.svg"
import feedbak from "../../../public/feedbak.svg"
import { FeedbakProject } from "./Feedbak"

export const Projects = () => {
   
    
    return (
        <>
        <p id="projetos" className="text-4xl font-bold mr-auto mb-10" >Nossos projetos</p>
        <section 
         className="w-full top-0 bg-neutral-50 rounded-3xl mb-10 min-h-[70vh] text-black flex flex-col 
         p-3 lg:p-10 pt-20 gap-y-20 items-center" >
            <ProjectRhema 
            imgSource={rhemaiphone}
            text="Rhema é uma plataforma criada para melhorar a comunicação entre a igreja e seus membros. No aplicativo de celular multiplataforma(Android/IOS) o membro tem acesso à agenda da igreja, biblia, devocionais, frases escolhidas pelos adiminstradores do aplicativo através de uma plataforma WEB exclusiva."
            title="Plataforma Rhema"
            />
            <FeedbakProject 
            imgSource={feedbak}
            text="Software as a service(Saas) para coleta de feedbacks e avaliações para empresas. Possui arquitetura multi-tenant, sistema de permissões, funcionalidade de like, sessão de comentários, etc."
            title="Feedbak"
            />

        </section>  
        </>
    )
}