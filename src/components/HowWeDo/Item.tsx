

interface ItemProps {
    title: string;
    icon: any;
}

export const Item = ({title, icon}: ItemProps ) => {

    return (
        <div className="w-80 h-56 rounded-2xl p-4 flex flex-col gap-y-4 items-center justify-center" >
            {icon}
            <p className="text-2xl font-medium mt-auto" >{title}</p>
        </div>
    )
}