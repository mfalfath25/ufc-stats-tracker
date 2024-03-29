"use client"
import { Seasons } from "@/types"
import { ArrowUpDown } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import EmptyData from "./EmptyData"

interface TableCompetitionsProps {
  data: Seasons | undefined | null
}

const TableCompetitions = ({ data }: TableCompetitionsProps) => {
  const [reverseMapping, setReverseMapping] = useState(false)

  if (!data || !data.seasons) {
    return <EmptyData />
  }

  const handleToggleReverse = () => {
    setReverseMapping(!reverseMapping)
  }

  const competitionsToRender =
    reverseMapping && data ? data?.seasons : [...data?.seasons]?.reverse()

  return (
    <>
      <div className="w-1/2 overflow-y-auto border border-red-500">
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
              <th>Season Name</th>
              <th className="hidden 2xl:table-cell">Start Date</th>
              <th className="hidden 2xl:table-cell">End Date</th>
              <th>Year</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {competitionsToRender?.map((season, index) => (
              <tr key={index} className="hover">
                <td className="">{index + 1}</td>
                <td>{season?.name}</td>
                <td className="hidden 2xl:table-cell">{season?.start_date}</td>
                <td className="hidden 2xl:table-cell">{season?.end_date}</td>
                <td>{season?.year}</td>
                <td>
                  <button className="btn-xs btn normal-case">
                    <Link href={`/seasons/${season?.id}`}>Detail</Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TableCompetitions
