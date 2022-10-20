import Image from "next/future/image"
import Link from "next/link"
import logo from "../../public/brand.svg"


export const Header = () => {

    return (
        <header className="w-full h-20 pb-3 flex items-end justify-between" >
              <div className="flex items-center gap-x-1" >
                
              <Image src={logo} width={140} alt="logo image" />
              </div>

              <div className="hidden lg:flex gap-x-10 font-semibold text-gray-800" >
                <Link href={'/#'} >
                <a className="hover:scale-110 duration-150" >Home</a>
                </Link>
                <Link href={'/#'}>
                <a className="hover:scale-110 duration-150">Projetos</a>
                </Link>
                <Link href={'/#'} >
                <a className="hover:scale-110 duration-150">Contato</a>
                </Link>
              </div>

              <div></div>
        </header>

    )
}