import { DisplayData, Item } from "@/type/types"
import Image from "next/image"

export const Content: React.FC<{ displayData: DisplayData }> = ({ displayData }) => {

    return (
        <div className="absolute top-16 w-full">
            {displayData.filter(({ show }) => show).map((arri, index) => (
                <div key={index}>
                    <div className="sticky top-16 text-2xl font-bold text-white bg-green-700/80">{arri.arrival}</div>
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,_1fr))]">
                        {arri.list.filter(({ show }) => show).reduce((acc: Array<Item>, cur) => acc.concat(cur.list), []).map((item, index) => (
                            <div key={index} className="mx-auto p-2">
                                <Image src={item.image_url} width={304} height={228} alt={item.name} />
                                <div>{item.name}</div>
                                <div>{item.price}円</div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
