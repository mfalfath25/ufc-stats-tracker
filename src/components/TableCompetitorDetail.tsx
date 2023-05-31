'use client'

import { CompetitorProfile } from "@/types"

interface TableCompetitorDetailProps {
  data?: CompetitorProfile
}

export default function TableCompetitorDetail({ data }: TableCompetitorDetailProps) {

  return (
    <div>
      <table className="table-compact table w-full divide-y table-zebra border border-red-500">
        <thead>
          <tr>
            <th>Competitor</th>
            <th>Gender</th>
            <th>Country</th>
            <th>Birth Info</th>
            <th>Stats (Reach/Height/Weight)</th>
            <th>Nickname</th>
            <th>Record (W/D/L)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {
              !data && <td colSpan={7}>No data</td>
            }
            {
              data && (
                <>
                  <td>{data.competitor.name} ({data.competitor.abbreviation})</td>
                  <td>{data.competitor.gender}</td>
                  <td>{data.info.birth_country}</td>
                  <td>{data.info.birth_city}, {data.info.birth_date}</td>
                  <td>{data.info.reach} / {data.info.height} / {data.info.weight}</td>
                  <td>{data.info.nickname}</td>
                  <td>{data.record.wins} / {data.record.draws} / {data.record.losses}</td>
                </>
              )
            }
          </tr>
        </tbody>
      </table>
    </div>
  )
}