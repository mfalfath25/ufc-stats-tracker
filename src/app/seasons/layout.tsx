import { Suspense } from "react"
import { fetcher } from "@/utils/fetcher"
import EmptyData from "@/components/EmptyData"
import TableCompetitions from "@/components/TableCompetitions"
import Loading from "./loading"

export default async function SeasonsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const data = await fetcher("seasons")

  return (
    <section className="flex h-screen flex-grow flex-col items-start justify-start overflow-y-auto m-0 p-0">
      <kbd className="kbd mb-1 w-full rounded-none border border-red-500 text-lg font-bold capitalize">
        Seasons
      </kbd>
      {
        data === null || undefined ? (
          <EmptyData />
        ) : (
          <div className="flex w-full flex-row overflow-y-auto">
            <Suspense fallback={<Loading />}>
              <TableCompetitions data={data} />
            </Suspense>
            <div className="relative flex w-1/2 flex-grow overflow-y-auto">
              {children}
            </div>
          </div>
        )
      }
    </section>
  )
}
