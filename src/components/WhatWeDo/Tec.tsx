import Image from "next/future/image";

interface TecProps {
    img: any;
    text: string
}

export const Tec = ({ img, text}: TecProps) => {

    return (
        <div className="w-32 h-32 flex flex-col gap-y-2 items-center justify-center py-4" >
            <Image src={img} alt="" className="w-14 my-auto" />
            <p className="mt-auto" >{text}</p>
        </div>
    )
}