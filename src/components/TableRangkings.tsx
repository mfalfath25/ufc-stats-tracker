"use client"
import { Rankings } from "@/types"
import { transformText } from "@/utils/stringCleanup"
import { Info } from "lucide-react"
import Link from "next/link"

interface TableRankingsProps {
  data: Rankings
}
const TableRankings = ({ data }: TableRankingsProps) => {
  return (
    <div>
      <div className="grid-rows-auto grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {data?.rankings?.map((ranking, index) => (
          <>
            <div className="grid-item flex-grow border border-red-500 text-center">
              <kbd
                key={index}
                className="kbd w-full rounded-none text-lg font-bold capitalize"
              >
                {transformText(ranking?.name)} ({ranking?.year})
              </kbd>
              <table className="table-compact table-zebra table-xs mb-10 table w-full divide-y">
                <thead>
                  <tr className="text-center">
                    <th>Rank</th>
                    <th className="text-start">Name</th>
                    <th>Abbreviation</th>
                    <th>Gender</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {ranking?.competitor_rankings?.map((fighter, index) => (
                    <tr key={index} className="hover text-center">
                      <td>{index + 1}</td>
                      <td className="text-start">
                        {fighter?.competitor?.name}
                      </td>
                      <td>{fighter?.competitor?.abbreviation}</td>
                      <td>{fighter?.competitor?.gender}</td>
                      <td>
                        <button className="btn-xs btn px-1 normal-case">
                          <Link href={`/rankings/${fighter?.competitor?.id}`}>
                            <Info size={16} strokeWidth={3} />
                          </Link>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default TableRankings
