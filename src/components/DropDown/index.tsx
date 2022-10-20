import { motion, Variants } from "framer-motion"
import { HiMenuAlt4 } from "react-icons/hi"
import { Item } from "./Item";

interface DropdownProps {
    isOpen: boolean;
    setOpen: any;
}

export const DropdownMenu = ({isOpen, setOpen}: DropdownProps) => {

    const menuVariants: Variants = {
        normal: {
            rotate: 0
        },
        clicked: {
            rotate: 90
        }
    }


    const smoothAnchor = (id: string) => {
        const element = document.getElementById(id)

        return element && element.scrollIntoView({behavior: 'smooth', block:'start'})
    }

    return( 
        <motion.div
         onClick={() => 
         setOpen(!isOpen)} 
         className="lg:hidden relative w-14 h-14 rounded-xl flex items-center justify-center "
          >
            <HiMenuAlt4 size={34} />

            {isOpen === true ? (
                <motion.div 
                initial={{translateY: 0}}
                animate={{translateY: 15}}
                className="w-52 min-h-20 px-3 pb-3 gap-y-3 bg-black rounded-md absolute -left-[9.6rem] -bottom-32"
                 >
                    <Item anchor={() => smoothAnchor('home')} text="home" />
                    <Item anchor={() => smoothAnchor('projetos')} text="projetos" />
                    <Item anchor={() => smoothAnchor('contato')} text="contato" />

                </motion.div>
            ) : null}
        </motion.div>
    )
}