import TableRankings from "@/components/TableRangkings"
import { fetcher } from "@/utils/fetcher"

export default async function Rankings() {
  const data = await fetcher('rankings')

  return (
    <div>
      <TableRankings data={data} />
    </div>
  )
}