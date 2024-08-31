import { Category, Item } from "@/type/types"

export const groupByDate = (list: Array<Item>) => list.reduce((acc: Array<{ arrival: string, show: boolean, list: Array<Item> }>, cur) => {
    const index = acc.findIndex(({ arrival }) => arrival == cur.arrival)
    if (index < 0) {
        acc.push({ arrival: cur.arrival, show: true, list: [cur] })
    }
    else {
        acc[index].list.push(cur)
    }
    return acc
}, []).toSorted((a, b) => a.arrival > b.arrival ? 1 : -1)


export const groupByCategory = (list: Array<Item>) => list.reduce((acc: Array<{ category: string, show: boolean, list: Array<Item> }>, cur) => {
    const index = acc.findIndex(({ category }) => category == cur.category)
    if (index < 0) {
        acc.push({ category: cur.category, show: true, list: [cur] })
    }
    else {
        acc[index].list.push(cur)
    }
    return acc
}, [])


export const getCategories = (list: Array<Item>) => list.reduce((acc: Array<Category>, cur) => {
    if (!acc.some(({ id }) => id == cur.category)) {
        acc.push({ label: cur.category ? cur.category : "分類なし", id: cur.category, checked: true })
    }
    return acc
}, [])