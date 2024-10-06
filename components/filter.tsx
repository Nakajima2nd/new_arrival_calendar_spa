import { Category, DisplayDataCate } from "@/type/types"
import { useEffect, useState } from "react"

type FilterProps = {
    displayData: DisplayDataCate,
    setDisplayData: React.Dispatch<React.SetStateAction<DisplayDataCate>>,
    categories: Array<Category>
}

export const Filter: React.FC<FilterProps> = ({ displayData, setDisplayData }) => {

    const [checked, setChecked] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
        setDisplayData(
            displayData.map(cate => ({
                ...cate,
                list: cate.list.map(arri => ({
                    ...arri,
                    show: arri.isOnSale || event.target.checked
                }))
            }))
        )
    }

    return (
        <div className="fixed top-0 w-full h-16 z-10 bg-white">
            <Checkbox checked={checked} id="全て" label="発売中の商品だけを表示する" onChange={handleChange} />
        </div>
    )
}

type CheckboxProps = {
    checked: boolean,
    id: string,
    label: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, id, label, onChange }) => {
    return (
        <div className="m-2">
            <input type="checkbox" checked={checked} data-id={id} onChange={onChange} className="" />
            <label className="">{label}</label>
        </div>
    )
}