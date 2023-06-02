import { Rankings } from "@/types";
import transformText from "@/utils/stringCleanup";
import { Info } from "lucide-react";
import Link from "next/link";

interface TableRankingsProps {
  data: Rankings
}

export default function TableRankings({ data }: TableRankingsProps) {

  return (
    <div>
      <div className="grid gap-2 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 grid-rows-auto">
        {data?.rankings.map((ranking, index) => (
          <>
            <div className="grid-item flex-grow text-center border border-red-500">
              <kbd key={index} className="kbd w-full text-lg font-bold capitalize rounded-none">{transformText(ranking.name)} ({ranking.year})</kbd>
              <table className="table-compact table table-xs w-full divide-y mb-10 table-zebra">
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
                  {ranking.competitor_rankings.map((fighter, index) => (
                    <tr key={index} className='hover text-center'>
                      <td>{index + 1}</td>
                      <td className="text-start">{fighter.competitor.name}</td>
                      <td>{fighter.competitor.abbreviation}</td>
                      <td>{fighter.competitor.gender}</td>
                      <td>
                        <button className="btn btn-xs normal-case px-1">
                          <Link href={`/rankings/${fighter.competitor.id}`}>
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