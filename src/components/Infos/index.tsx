import { Info } from "./Info"


export const InfoSection = () => {

    return (
        <section className="w-3/4 min-h-[30vh] mt-10 py-10 flex flex-wrap items-center justify-center gap-6" >
            <Info 
            title="E-commerce"
            description="Temos experiência na construção de e-commerce com as mais diversas ferramentas, que se encaixarão exatamente no que você precisa."
            />
            <Info 
            title="Desenvolvimento Web"
            description="Desenvolvemos qualquer tipo de website ou sistema para a sua necessidade. Temos uma equipe de especialistas habilidosos."
            />
            <Info 
            title="Desenvolvimento mobile"
            description="Todas as funcionalidades de aplicativos que você desejar, publicamos na Apple store e Google play"
            />
            <Info 
            title="Otimizações"
            description="Nós melhoramos seu app ou sistema já existente, otimizando performance, suavidade e velocidade."
            />
        </section>
    )
}