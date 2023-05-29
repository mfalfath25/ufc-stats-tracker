import Table from "@/components/Table"
import { fetcher } from "@/utils/fetcher"

export default async function Rankings() {
  const data = await fetcher('rankings')

  return (
    <div>
      <Table data={data} tableType='rankings' />
    </div>
  )
}