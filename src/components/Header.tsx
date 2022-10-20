import Image from "next/future/image"
import Link from "next/link"
import { useState } from "react"
import logo from "../../public/qza2.svg"
import { DropdownMenu } from "./DropDown/index"


export const Header = () => {
  const [ dropdownState, setDropdownState ] = useState<boolean>(false)

    const smoothAnchor = (id: string) => {
        const element = document.getElementById(id)

        return element && element.scrollIntoView({behavior: 'smooth', block:'start'})
    }


    return (
        <header className="w-full h-20 pb-3 px-3 lg:px-20 flex items-end justify-between top-0 fixed z-50 bg-white/50 backdrop-blur-2xl" >
              <div className="flex items-center gap-x-1" >
                
              <Image src={logo} width={70} alt="logo image" className="absolute top-1" />
              </div>

              <div className="hidden lg:flex gap-x-10 font-semibold text-gray-800" >
               
                <a onClick={() => smoothAnchor('home')} className="hover:scale-110 duration-150 cursor-pointer" >Home</a>
                
                <a onClick={() => smoothAnchor('projetos')} className="hover:scale-110 duration-150 cursor-pointer">Projetos</a>
                
                <a onClick={() => smoothAnchor('contato')} className="hover:scale-110 duration-150 cursor-pointer">Contato</a>
            
              </div>


              <div className="hidden lg:flex" ></div>
              <DropdownMenu
              isOpen={dropdownState}
              setOpen={(x: any) => setDropdownState(x)}
              />
        </header>

    )
}