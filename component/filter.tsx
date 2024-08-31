import { Category, DisplayData } from "@/type/types"
import { useEffect, useState } from "react"

type FilterProps = {
    displayData: DisplayData,
    setDisplayData: React.Dispatch<React.SetStateAction<DisplayData>>,
    categories: Array<Category>
}

export const Filter: React.FC<FilterProps> = ({ displayData, setDisplayData, categories }) => {

    const [filter, setFilter] = useState(categories)
    const [allChecked, setAllChecked] = useState(true)

    const handleChangeAll = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAllChecked(event.target.checked)
        setFilter(filter.map(ele => ({ ...ele, checked: event.target.checked })))
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newFilter = filter.map(ele => ele.id == event.target.dataset.id ? { ...ele, checked: event.target.checked } : ele)
        if (newFilter.every(ele => ele.checked) && !allChecked) {
            setAllChecked(true)
        }
        else if (newFilter.some(ele => !ele.checked) && allChecked) {
            setAllChecked(false)
        }
        setFilter(newFilter)
    }

    useEffect(() => {
        const categoryUpdatedData = displayData.map((arri) =>
        ({
            ...arri,
            list: arri.list.map((cate) =>
            ({
                ...cate,
                show: filter.some(f => f.id == cate.category && f.checked) ? true : false
            }))
        }))

        const arrivalUpdatedData = categoryUpdatedData.map((arri) =>
        ({
            ...arri,
            show: arri.list.some(({ show }) => show)
        }))

        setDisplayData(arrivalUpdatedData)
    }, [filter])

    return (
        <div>
            <Checkbox checked={allChecked} id="全て" label="全て" onChange={handleChangeAll} />
            {filter.map((ele, index) => <Checkbox key={index} checked={ele.checked} id={ele.id} label={ele.label} onChange={handleChange} />)}
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
        <div>
            <label>{label}</label>
            <input type="checkbox" checked={checked} data-id={id} onChange={onChange} />
        </div>
    )
}