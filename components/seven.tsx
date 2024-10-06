'use client'

import { useState } from "react"
import { Filter } from "@/components/filter"
import { Content } from "@/components/content"
import { Category, DisplayDataCate } from "@/type/types"

export const Seven: React.FC<{ data: DisplayDataCate, categories: Array<Category> }> = ({ data, categories }) => {
    const [displayData, setDisplayData] = useState(data)

    return (<>
        <Filter displayData={displayData} setDisplayData={setDisplayData} categories={categories} />
        <Content displayData={displayData} />
    </>)
}