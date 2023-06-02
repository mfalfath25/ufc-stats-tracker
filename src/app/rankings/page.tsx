import TableRankings from "@/components/TableRangkings"
import { dummyRankings } from "@/dummy"
import { fetcher } from "@/utils/fetcher"
import { Suspense } from "react"
import Loading from "./loading"

export default async function Rankings() {
  const data = await fetcher('rankings')
  // const dummyData = dummyRankings

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <TableRankings data={data} />
      </Suspense>
    </div>
  )
}