import { DisplayData } from "@/type/types"
import Image from "next/image"

export const Content: React.FC<{ displayData: DisplayData }> = ({ displayData }) => {
    return (
        <div>
            {displayData.filter(({ show }) => show).map((arri, index) => (
                <div key={index}>
                    <div>{arri.arrival}</div>
                    {arri.list.filter(({ show }) => show).map((cate, index) => (
                        <div key={index}>
                            {cate.list.map((item, index) => (
                                <div key={index}>
                                    <Image src={item.image_url} width={300} height={300} alt={item.name} />
                                    <div>{item.name}</div>
                                    <div>{item.price}円</div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
