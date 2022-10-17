import Image from "next/future/image"
import webdevImage from "../../../public/webdev.svg"


export const MainSection = () => {

    return (
        <main className="lg:w-1/2 flex flex-col" >

            <p className="text-5xl" >Produtos complexos,</p>
            <span className="text-5xl text-purple-600 font-medium mt-2" >de ponta-a-ponta</span>

            <p className="mt-6 text-[#757575] text-2xl" >Dê-nos uma ideia,<br /> e vamos entregar <br /> a experiência completa.</p>

        </main>
    )
}