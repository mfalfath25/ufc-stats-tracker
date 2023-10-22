import { Suspense } from "react"
import { fetcher } from "@/utils/fetcher"
import TableRankings from "@/components/TableRangkings"
import Loading from "./loading"

export default async function Rankings() {
  const data = await fetcher("rankings")

  return (
    <section className="flex h-screen flex-grow flex-col items-start justify-start overflow-y-auto m-0 p-0">
      <kbd className="kbd mb-1 w-full rounded-none border border-red-500 text-lg font-bold capitalize">
        Rankings
      </kbd>
      <Suspense fallback={<Loading />}>
        <TableRankings data={data} />
      </Suspense>
    </section>
  )
}
