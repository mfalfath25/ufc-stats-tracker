import TableRankings from "@/components/TableRangkings"
import { dummyRankings } from "@/dummy"
import { fetcher } from "@/utils/fetcher"

export default async function Rankings() {
  // const data = await fetcher('rankings')
  const dummyData = dummyRankings

  return (
    <div>
      <TableRankings data={dummyData} />
    </div>
  )
}