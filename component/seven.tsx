'use client'

import { useState } from "react"
import { Filter } from "@/component/filter"
import { Content } from "@/component/content"
import { Category, DisplayData } from "@/type/types"

export const Seven: React.FC<{ data: DisplayData, categories: Array<Category> }> = ({ data, categories }) => {
    const [displayData, setDisplayData] = useState(data)

    return (
        <div>
            <Filter displayData={displayData} setDisplayData={setDisplayData} categories={categories} />
            <Content displayData={displayData} />
        </div>
    )
}