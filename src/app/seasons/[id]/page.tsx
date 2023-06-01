import TableCompetitionDetail from "@/components/TableCompetitionDetail";
import { fetcher } from "@/utils/fetcher";
import { Suspense } from "react";
import Loading from "./loading";

export default async function SeasonDetail({ params }: { params: { id: string } }) {
  const endpoint = `seasons/${params.id}/summaries`;
  const data = await fetcher(endpoint);

  return (
    <Suspense fallback={<Loading />}>
      <TableCompetitionDetail data={data} />
    </Suspense>
  )
}