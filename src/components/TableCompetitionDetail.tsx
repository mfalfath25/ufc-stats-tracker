import { Seasons } from "@/types"

interface TableCompetitionDetailProps {
  data: Seasons
}

export default function TableCompetitionDetail({ data }: TableCompetitionDetailProps) {
  return (
    <div>
      <table className="table-compact table w-full divide-y table-zebra border border-red-500">
        <thead>
          <tr>
            <th>Season Detail</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {
            data.seasons?.map((season, index) => (
              <tr key={index}>
                <td>{season.name}</td>
                <td>{season.start_date}</td>
                <td>{season.end_date}</td>
                <td>{season.year}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}