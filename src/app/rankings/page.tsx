import TableRankings from "@/components/TableRangkings"
import { fetcher } from "@/utils/fetcher"
import { Suspense } from "react"
import Loading from "./loading"

export default async function Rankings() {
  const data = await fetcher("rankings")

  return (
    <>
      <kbd className="kbd mb-1 w-full rounded-none border border-red-500 text-lg font-bold capitalize">
        Rankings
      </kbd>
      <Suspense fallback={<Loading />}>
        <TableRankings data={data} />
      </Suspense>
    </>
  )
}
