import { Category, Item } from "@/type/types"

export const groupByDate = (list: Array<Item>) => {
    const now = Date.now()
    return list.reduce((acc: Array<{ arrival: string, show: boolean, isOnSale: boolean, list: Array<Item> }>, cur) => {
        const index = acc.findIndex(({ arrival }) => arrival == cur.arrival)
        const [year, month, day] = cur.arrival.split("/").map(ele => Number(ele))
        const UTC = Date.UTC(year, month - 1, day) - (9 * 60 * 60 * 1000)

        if (index < 0) {
            acc.push({ arrival: cur.arrival, show: true, isOnSale: now > UTC, list: [cur] })
        }
        else {
            acc[index].list.push(cur)
        }
        return acc
    }, [])
}


export const groupByCategory = (list: Array<Item>) => list.reduce((acc: Array<{ category: string, show: boolean, list: Array<Item> }>, cur) => {
    const index = acc.findIndex(({ category }) => category == cur.category)
    if (index < 0) {
        acc.push({ category: cur.category, show: true, list: [cur] })
    }
    else {
        acc[index].list.push(cur)
    }
    return acc
}, []).map(item => ({...item, category: replace.find(ele => ele.from == item.category)?.to ?? item.category }))

export const getCategories = (list: Array<Item>): Array<Category> => {
    const categories = list.reduce((acc: Array<Category>, cur) => {
        if (!acc.some(({ id }) => id == cur.category)) {
            acc.push({ label: cur.category, id: cur.category, checked: true })
        }
        return acc
    }, [])

    const newCategories = replace.reduce((acc, cur) => {
        return acc.map(category => category.id == cur.from ? { ...category, label: cur.to } : category)
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