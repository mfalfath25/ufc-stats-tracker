import BackButton from "@/components/BackButton"
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
      {/* <BackButton /> */}
      <Suspense fallback={<Loading />}>
        <TableCompetitorDetail data={data} />
      </Suspense>
    </div>
  )
}