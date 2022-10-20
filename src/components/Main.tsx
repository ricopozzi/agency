import Image from "next/future/image"
import IphoneImage from "../../public/iphone.svg"


export const Main = () => {


    return (
        <>
         <main className="w-[90vw] lg:min-h-[70vh] mt-28 rounded-[2rem] bg-mesh bg-bottom flex flex-col p-10 relative" >
            <h1 
            className="font-black leading-10 lg:leading-[3.5rem] text-3xl lg:text-5xl lg:w-1/2 text-white"
            >Desenvolvemos os melhores softwares</h1>
            <p className="lg:w-1/2 mt-10 text-gray-100" >Especialistas em produtos digitais do Brasil, nós iremos desenvolver apps melhores e mais rápido.</p>

            <button className="w-48 h-14 mt-10 bg-white/80 hover:bg-white duration-150 rounded-xl font-bold tracking-wide" >Contate-nos</button>

            <Image 
            className="absolute right-28 -bottom-24 hidden lg:block lg:w-60"
            alt=""
            src={IphoneImage}
             />

         </main>
        </>
    )
}