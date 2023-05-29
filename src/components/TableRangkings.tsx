import { Rankings } from "@/types";

interface TableRankingsProps {
  data: Rankings
}

export default function TableRankings({ data }: TableRankingsProps) {

  return (
    <div>
      <div className="grid gap-2 grid-cols-3 grid-rows-auto">
        {data?.rankings.map((ranking, index) => (
          <>
            <div className="grid-item flex-grow text-center border border-red-500">
              <kbd key={index} className="kbd w-full text-lg font-bold capitalize rounded-none">{ranking.name} ({ranking.year})</kbd>
              <table className="table-compact table w-full divide-y mb-10 table-zebra">
                <thead>
                  <tr className="text-center">
                    <th>Rank</th>
                    <th className="text-start">Name</th>
                    <th>Abbreviation</th>
                    <th>Gender</th>
                  </tr>
                </thead>
                <tbody>
                  {ranking.competitor_rankings.map((fighter, index) => (
                    <tr key={index} className='hover text-center'>
                      <td>{index + 1}</td>
                      <td className="text-start">{fighter.competitor.name}</td>
                      <td>{fighter.competitor.abbreviation}</td>
                      <td>{fighter.competitor.gender}</td>
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