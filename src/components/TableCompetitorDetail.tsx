'use client'

import { CompetitorProfile } from "@/types"
import BackButton from "./BackButton"

interface TableCompetitorDetailProps {
  data?: CompetitorProfile
}

export default function TableCompetitorDetail({ data }: TableCompetitorDetailProps) {

  return (
    <div className="overflow-y-auto border border-red-500">
      <table className="table-compact table table-xs w-full divide-y table-zebra">
        <thead>
          <tr>
            <th><BackButton /></th>
            <th>Competitor</th>
            <th>Nickname</th>
            <th>Gender</th>
            <th>Country</th>
            <th>Birth Info</th>
            <th>Stats (Reach-Height-Weight)</th>
            <th>Record (W-L-D)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {
              data ?
                (
                  <>
                    <td></td>
                    <td>{data.competitor?.name} ({data.competitor?.abbreviation})</td>
                    <td>{data.info?.nickname}</td>
                    <td>{data.competitor?.gender}</td>
                    <td>{data.info?.birth_country}</td>
                    <td>{data.info?.birth_city}, {data.info?.birth_date}</td>
                    <td>{data.info?.reach} - {data.info?.height} - {data.info?.weight}</td>
                    <td>{data.record?.wins} - {data.record?.losses} - {data.record?.draws}</td>
                  </>
                )
                :
                <td colSpan={7}>No data</td>
            }
          </tr>
        </tbody>
      </table>
    </div>
  )
}