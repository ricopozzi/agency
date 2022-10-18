

interface InfoProps {
    title: string;
    description: string;
}

export const Info = ({title, description}: InfoProps) => {

    return(
        <div
        className="w-96 h-44 flex flex-col"
        >
            <p className="text-lg text-black font-medium " >{title}</p>
            <p className="text-sm mt-1 text-gray-500" >{description}</p>

        </div>
    )
}