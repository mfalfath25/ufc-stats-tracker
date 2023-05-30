import TableCompetitionDetail from "@/components/TableCompetitionDetail";
import { fetcher } from "@/utils/fetcher";
import { Suspense } from "react";
import Loading from "./loading";

export default async function CompetitionDetail({ params }: { params: { id: string } }) {
  const endpoint = `competitions/${params.id}/seasons`;
  const data = await fetcher(endpoint);

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <TableCompetitionDetail data={data} />
      </Suspense>
    </div>
  )
}