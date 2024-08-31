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

export type DisplayData = Array<{
    arrival: string,
    show: boolean,
    list: Array<{
        category: string,
        show: boolean,
        list: Array<Item>
    }>
}>