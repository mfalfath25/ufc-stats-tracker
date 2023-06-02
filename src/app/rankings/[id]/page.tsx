import { fetcher } from "@/utils/fetcher"
import { Suspense } from "react";
import Loading from "./loading";
import TableCompetitorDetail from "@/components/TableCompetitorDetail";


export default async function ConpetitorDetail({ params }: { params: { id: string } }) {
  const decodedId = decodeURIComponent(params.id)
  const endpoint = `competitors/${decodedId}/profile`
  const data = await fetcher(endpoint)

  return (
    <div>
      <kbd className="kbd w-full text-lg font-bold capitalize rounded-none border border-red-500 mb-1">Fighter Detail</kbd>
      <Suspense fallback={<Loading />}>
        <TableCompetitorDetail data={data} />
      </Suspense>
    </div>
  )
}