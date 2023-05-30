'use client'
import { Competitions } from "@/types";
import { ArrowUpDown } from "lucide-react";
import Link from "next/link";
import { ReactNode, useState } from "react";

interface TableCompetitionsProps {
  data: Competitions
  children?: ReactNode
}

export default function TableCompetitions({ data, children }: TableCompetitionsProps) {
  const [reverseMapping, setReverseMapping] = useState(false);

  const handleToggleReverse = () => {
    setReverseMapping(!reverseMapping)
  }

  const competitionsToRender = reverseMapping ? [...data.competitions].reverse() : data.competitions;

  return (
    <div >
      <kbd className="kbd w-full text-lg font-bold capitalize rounded-none">Competitions</kbd>
      {/* <div className={`grid gap-2 ${competitionId !== '' ? 'grid-cols-2' : 'grid-cols-1'} grid-rows-auto`}> */}
      <div className={`grid gap-2 grid-cols-2 grid-rows-auto`}>
        <table className="table-compact table w-full divide-y table-zebra border border-red-500">
          <thead>
            <tr>
              <th className="flex flex-row items-center w-16 pl-4">
                <p>No.</p>
                <button className="text-blue-500 hover:text-blue-700" onClick={handleToggleReverse}>
                  <ArrowUpDown color="red" size={16} strokeWidth={3} />
                </button>
              </th>
              <th>Season Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {competitionsToRender?.map((competition, index) => (
              <tr key={index} className='hover'>
                <td className="w-16 pl-4">{index + 1}</td>
                <td>{competition.name}</td>
                <td>
                  <button className="btn btn-xs">
                    <Link href={`/competitions/${competition.id}`}>Detail</Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {children}
      </div>
    </div>
  )
}