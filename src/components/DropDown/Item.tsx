
interface ItemProps {
    anchor: any;
    text: string;
}

export const Item = ({anchor, text}: ItemProps) => {

    return(
        <div onClick={anchor} className="w-full h-10 flex items-end justify-start capitalize font-light text-base text-white" >
            {text}
        </div>
    )
}