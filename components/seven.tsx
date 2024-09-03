'use client'

import { useState } from "react"
import { Filter } from "@/components/filter"
import { Content } from "@/components/content"
import { Category, DisplayData } from "@/type/types"

export const Seven: React.FC<{ data: DisplayData, categories: Array<Category> }> = ({ data, categories }) => {
    const [displayData, setDisplayData] = useState(data)

    return (
        <div className="relative">
            <Filter displayData={displayData} setDisplayData={setDisplayData} categories={categories} />
            <Content displayData={displayData} />
        </div>
    )
}