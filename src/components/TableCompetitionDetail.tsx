'use client'
import { SeasonDetails } from "@/types"
import { useState } from "react";
import { ArrowUpDown } from "lucide-react";
import transformText from "@/utils/stringCleanup";
import Link from "next/link";

interface TableCompetitionDetailProps {
  data: SeasonDetails
}

export default function TableCompetitionDetail({ data }: TableCompetitionDetailProps) {
  const [reverseMapping, setReverseMapping] = useState(false);

  const getWinnerName = (winnerId?: string, competitors?: any[]) => {
    const winner = competitors?.find((competitor) => competitor.id === winnerId);
    return winner ?
      <p>{winner.name} ({winner.abbreviation})</p>
      : '';
  }

  const handleToggleReverse = () => {
    setReverseMapping(!reverseMapping)
  }

  const competitionsToRender = reverseMapping ? [...data.summaries].reverse() : data.summaries;

  return (
    <div>
      <table className="table-compact table w-full divide-y table-zebra border border-red-500">
        <thead>
          <tr>
            <th className="flex flex-row items-center">
              <p>No.</p>
              <button className="text-blue-500 hover:text-blue-700" onClick={handleToggleReverse}>
                <ArrowUpDown color="red" size={16} strokeWidth={3} className="ml-2" />
              </button>
            </th>
            <th>Competitor</th>
            <th>Weight Class</th>
            <th>Title Fight</th>
            <th>Winner</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            competitionsToRender?.map((data, index) => (
              <tr key={index} className='hover'>
                <td>{index + 1}</td>
                <td>{data.sport_event.competitors?.map((competitor, index) => (
                  <>
                    <p key={index}>
                      {competitor.name} ({competitor.abbreviation})
                    </p>
                  </>
                ))}</td>
                <td>{transformText(data.sport_event_status.weight_class)}</td>
                <td>{data.sport_event_status.title_fight === true ? 'Yes' : 'No'}</td>
                <td>{getWinnerName(data.sport_event_status.winner_id, data.sport_event.competitors)}</td>
                <td>{data.sport_event_status.status}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}