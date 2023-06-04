import TableCompetitions from "@/components/TableCompetitions"
import { Suspense } from "react"
import Loading from "./loading"
import { fetcher } from "@/utils/fetcher"

export default async function SeasonsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const data = await fetcher("seasons")

  return (
    <section className="flex h-screen flex-grow flex-col items-start justify-start overflow-y-auto">
      <kbd className="kbd mb-1 w-full rounded-none border border-red-500 text-lg font-bold capitalize">
        Seasons
      </kbd>
      <div className="flex w-full flex-row overflow-y-auto">
        <Suspense fallback={<Loading />}>
          <TableCompetitions data={data} />
        </Suspense>
        <div className="relative flex w-1/2 flex-grow overflow-y-auto">
          {children}
        </div>
      </div>
    </section>
  )
}
