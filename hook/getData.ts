import { Item } from "@/type/types"
import { getCategories, groupByCategory, groupByDate } from "@/util/util"

export const useGetSevenData = async () => {
    const res = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=Te9k5m0NTLvGSfYN7fcZgV1_zb1WtWUQG0rxXC1ro5HFo64NkGBzsOarOo1z2ILZ2xfP-bLpEdgLCMCzUb9nTACReDaaKRt_m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnO-me_vJzeYxYL1nHUMesNym70Xw9RibIr-Ib_YimXt0xGQ17r-F8sqtdpGVeT9-b3ob00gQE0znXRoFQZhuAxLdBg1Bk-CQr9z9Jw9Md8uu&lib=MvhUod0yT_HjuSR0xsDT2sHdsAySd93ni')
    const rawData: Array<Item> = await res.json()

    const data = groupByDate(rawData).map(ele => ({ ...ele, list: groupByCategory(ele.list) }))
    const categories = getCategories(rawData)

    return { data, categories }
}