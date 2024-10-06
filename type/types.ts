export type RawData = Array<Item>

export type Item = {
    id: string,
    name: string,
    category: string,
    description: string,
    price: string,
    tax_price: string,
    arrival: string,
    url: string,
    image_url: string
}

export type Category = {
    label: string,
    checked: boolean,
    id: string
}

export type DisplayDataArri = Array<{
    arrival: string,
    show: boolean,
    list: Array<{
        category: string,
        show: boolean,
        list: Array<Item>
    }>
}>

export type DisplayDataCate = Array<{
    category: string,
    show: boolean,
    list: Array<CateItem>
}>

export type CateItem = {
    arrival: string,
    show: boolean,
    isOnSale: boolean,
    list: Array<Item>
}