"use client"
import { SeasonDetails } from "@/types"
import { useState } from "react"
import { ArrowUpDown } from "lucide-react"
import { transformText, transformWinningMethod } from "@/utils/stringCleanup"
import EmptyData from "./EmptyData"

interface TableCompetitionDetailProps {
  data: SeasonDetails | null | undefined
}

const TableCompetitionDetail = ({ data }: TableCompetitionDetailProps) => {
  const [reverseMapping, setReverseMapping] = useState(false)

  if (!data || !data.summaries) {
    return <EmptyData />
  }

  const getWinnerName = (winnerId?: string, competitors?: any[]) => {
    const winner = competitors?.find((competitor) => competitor.id === winnerId)
    return winner ? (
      <p>
        {winner.name} ({winner.abbreviation})
      </p>
    ) : (
      ""
    )
  }

  const handleToggleReverse = () => {
    setReverseMapping(!reverseMapping)
  }

  const competitionsToRender = reverseMapping
    ? data.summaries
    : [...data.summaries].reverse()

  return (
    <div className="w-full overflow-y-auto border border-red-500">
      <table className="table-compact table-zebra table-xs table w-full divide-y">
        <thead>
          <tr>
            <th className="flex flex-row items-center">
              <p>No.</p>
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={handleToggleReverse}
              >
                <ArrowUpDown
                  color="red"
                  size={16}
                  strokeWidth={3}
                  className="ml-2"
                />
              </button>
            </th>
            <th>Competitor</th>
            <th>Weight Class</th>
            <th className="hidden 2xl:table-cell">Title Fight</th>
            <th>Winner</th>
            <th>Method</th>
            <th className="hidden 2xl:table-cell">Status</th>
            <th className="hidden 2xl:table-cell">Venue</th>
          </tr>
        </thead>
        <tbody>
          {competitionsToRender?.map((data, index) => (
            <tr key={index} className="hover">
              <td>{index + 1}</td>
              <td>
                {data?.sport_event?.competitors?.map((competitor, index) => (
                  <p key={index}>
                    {competitor?.name} ({competitor?.abbreviation})
                  </p>
                ))}
              </td>
              <td>{transformText(data?.sport_event_status?.weight_class)}</td>
              <td className="hidden 2xl:table-cell">
                {data.sport_event_status?.title_fight === true ? "Yes" : "No"}
              </td>
              <td>
                {data?.sport_event_status?.winner_id
                  ? getWinnerName(
                    data?.sport_event_status?.winner_id,
                    data?.sport_event?.competitors
                  )
                  : "-"}
              </td>
              <td>
                {data.sport_event_status?.method
                  ? transformWinningMethod(data?.sport_event_status?.method)
                  : "-"}
              </td>
              <td className="hidden 2xl:table-cell">
                {data?.sport_event_status?.status}
              </td>
              <td className="hidden 2xl:table-cell">
                {data?.sport_event_status?.status !== "not_started"
                  ? `${data?.sport_event?.venue?.name}, ${data?.sport_event?.venue?.country_name}`
                  : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableCompetitionDetail
