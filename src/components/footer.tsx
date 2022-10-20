import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as y from "yup"
import { useState } from "react"
import { motion } from "framer-motion"

const formSchema = y.object({
    name: y.string().required('Campo obrigatório'),
    email: y.string().email('É necessário um email válido').required('Esse campo é necessário'),
    phone: y.string().min(11, 'Insira um telefone válido').required('Esse campo é necessário')
})

export const Footer = () => {
    const [isLoading, setLoading] = useState<boolean>(false)
    const [isSent, setSent] = useState<boolean>(false)
    const { handleSubmit, formState: {errors}, register } = useForm({
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            message: ''
        },
        resolver: yupResolver(formSchema)
    })

    const onSubmit = async (data: any) => {
        setLoading(true)
        await fetch('/api/email', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((res) => {
    setLoading(false)
    if(res.status === 200) setSent(true)
  })
    }
    return(
        <footer id="contato" className="w-full min-h-80 bg-black px-3 lg:pt-14 py-40 flex flex-col lg:flex-row relative"  >
            <p className="text-3xl text-white text-center mb-8 absolute left-10 top-4 lg:top-14" >Queza</p>

            <form 
            onSubmit={handleSubmit(onSubmit)}
            className="w-5/6 lg:w-[40vw] h-[60vh] flex flex-col mx-auto gap-y-9" >
               {isSent ? (
                <div className="w-full lg:w-96 h-44 bg-gradient-to-br from-purple-500 to-orange-500 m-auto rounded-3xl flex items-center justify-center font-bold text-lg lg:text-2xl text-white" >
                    Entraremos em contato
                </div>
               ) : (
                <>
                 <label className="relative" htmlFor="">
                 <input
                 {...register("name", {required: true})}
                 className="w-full h-10 border border-white bg-transparent rounded-md text-white px-2"
                 placeholder="Nome completo"
                  />
                 <p className="text-white absolute -bottom-7" >{errors.name?.message}</p>
                 </label>
 
                <label htmlFor="" className="relative">
                <input
                 {...register("email", {required: true})}
                 className="w-full h-10 border border-white bg-transparent rounded-md text-white px-2"
                 placeholder="Email"
                  />
                  <p className="text-white absolute -bottom-7" >{errors.email?.message}</p>
                </label>
 
                <label htmlFor="" className="relative">
                <input
                 {...register("phone", {required: true})}
                 className="w-full h-10 border border-white bg-transparent rounded-md text-white px-2"
                 placeholder="Telefone com DDD"
                  />
                  <p className="text-white absolute -bottom-7" >{errors.phone?.message}</p>
                </label>
 
                  <textarea 
                 {...register("message")}
                 className="w-full h-40 border border-white bg-transparent rounded-md text-white p-2"
                 placeholder="Sua mensagem"
                  />
 
 
                 {isLoading ? (
                     <motion.div
                     initial={{scale: 1, opacity: .1}}
                     animate={{scale: 2, opacity: 1}}
                     transition={{
                         ease: 'linear',
                         duration: 1.3,
                         repeat: Infinity,
                         repeatType: 'reverse'
                     }}
                     className="w-8 h-8 bg-gradient-to-br from-purple-500 to-orange-500 mx-auto rounded-full"
                     />
 
                 ): (
                     <button 
                     className="w-1/2 mx-auto h-14 bg-white rounded-lg font-bold tracking-wide"
                     >Enviar</button>
                 )}
                </>
               )}

            </form>

            <p className="absolute bottom-3 mx-auto left-0 right-0 text-center w-60 text-white font-medium" >Todos os direitos reservados</p>

        </footer>
    )
}