import { useGetSevenData } from "@/hook/getData"
import { Seven } from "@/components/seven";

const Home = async () => {

  const { data, categories } = await useGetSevenData()

  return (
    <Seven data={data} categories={categories} />
  )
}

export default Home