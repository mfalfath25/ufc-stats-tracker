import Table from '@/components/Table'
import { Champions } from '@/types'
import { fetcher } from '@/utils/fetcher'

export default async function Home() {
  const data: Champions = await fetcher('champions')

  return (
    <div>
      <Table data={data} tableType='home' />
    </div>
  )
}
