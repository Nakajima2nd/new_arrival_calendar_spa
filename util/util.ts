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

export const getCategories = (list: Array<Item>) => {
    const categories = list.reduce((acc: Array<Category>, cur) => {
        if (!acc.some(({ id }) => id == cur.category)) {
            acc.push({ label: cur.category ? cur.category : "分類なし", id: cur.category, checked: true })
        }
        return acc
    }, [])

    const newCategories = replace.reduce((acc, cur) => {
        return acc.map(category => category.id == cur.from ? {...category, label: cur.to}: category)
    }, categories)

    return newCategories
}

const replace = [
    {
        from: "サンドイッチ・ロールパン",
        to: "パン"
    },
    {
        from: "そば・うどん・中華麺",
        to: "麺"
    },
    {
        from: "",
        to: "飲料・お菓子"
    },
    {
        from: "揚げ物・フランク・焼き鳥",
        to: "ホットスナック"
    }
]