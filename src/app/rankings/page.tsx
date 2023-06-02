import TableRankings from "@/components/TableRangkings"
import { fetcher } from "@/utils/fetcher"
import { Suspense } from "react"
import Loading from "./loading"

export default async function Rankings() {
  const data = await fetcher('rankings')

  return (
    <div>
      <kbd className="kbd w-full text-lg font-bold capitalize rounded-none border border-red-500 mb-1">Rankings</kbd>
      <Suspense fallback={<Loading />}>
        <TableRankings data={data} />
      </Suspense>
    </div>
  )
}