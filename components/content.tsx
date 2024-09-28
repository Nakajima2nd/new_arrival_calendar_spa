import { DisplayData, Item } from "@/type/types"
import Image from "next/image"
import { Fragment, useState } from "react"

const initialItem = {
    id: "",
    name: "",
    category: "",
    description: "",
    price: "",
    tax_price: "",
    arrival: "",
    url: "",
    image_url: ""
}
export const Content: React.FC<{ displayData: DisplayData }> = ({ displayData }) => {
    const [open, setOpen] = useState(false)
    const [item, setItem] = useState<Item>(initialItem)
    const onClick = (item: Item) => {
        setOpen(true)
        setItem(item)
    }

    return (<>
        <div className="absolute top-16 w-full">
            {displayData.filter(({ show }) => show).map((arri, index) => (
                <Fragment key={index}>
                    <div className="sticky top-16 text-2xl font-bold text-white bg-green-700/80">{arri.arrival}</div>
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,_1fr))]">
                        {arri.list.filter(({ show }) => show).reduce((acc: Array<Item>, cur) => acc.concat(cur.list), []).map((item, index) => (
                            <div key={index} className="mx-auto p-2">
                                <Image src={item.image_url} width={304} height={228} alt={item.name} onClick={() => onClick(item)} />
                                <div>{item.name}</div>
                                <div>{item.price}円</div>
                            </div>
                        ))}
                    </div>
                </Fragment>
            ))}
        </div>
        <Modal setOpen={setOpen} setItem={setItem} open={open} />
        <Dialog item={item} setOpen={setOpen} open={open} />
    </>)
}

const Modal: React.FC<{ setOpen: React.Dispatch<React.SetStateAction<boolean>>, setItem: React.Dispatch<React.SetStateAction<Item>>, open: boolean }> = ({ setOpen, setItem, open }) => {
    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        setOpen(false)
        setItem(initialItem)
    }

    const style = `fixed top-0 left-0 w-full h-full bg-black z-20  duration-500 ${open ? "visible opacity-50" : "invisible opacity-0"}`
    return (
        <div className={style} onClick={(e) => onClick(e)}>
        </div>
    )
}

const Dialog: React.FC<{ item: Item, setOpen: React.Dispatch<React.SetStateAction<boolean>>, open: boolean }> = ({ item, setOpen, open }) => {
    const style = `p-2 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 h-4/5 bg-white z-30 duration-500 ${open ? "visible opacity-100" : "invisible opacity-0"}`
    return (
        <div className={style}>
            <div className="text-lg w-">{item.name}</div>
            <div>
                <div>{item.arrival}</div>
                <div>{item.price}円(税込{item.tax_price}円)</div>
            </div>
            <div className="w-full relative">
                <Image src={item.image_url} fill alt={item.name} style={{ position: "", objectFit: "fill", height: "" }} />
            </div>
            <div className="relative">{item.description}</div>
        </div>
    )
}