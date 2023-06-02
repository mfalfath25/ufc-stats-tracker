import TableCompetitions from "@/components/TableCompetitions"
import { dummySeasons } from "@/dummy"
import Image from "next/image"

export default async function Home() {
  const x = dummySeasons

  return (
    <div className="flex-grow flex flex-col items-center sm:justify-end justify-center h-screen overflow-y-auto">
      <div className="mb-10 flex flex-col items-center justify-center">
        <Image src="/ufc.svg" alt="UFC Logo" priority={true} width={300} height={300} className="w-1/2 sm:w-full max-w-sm h-auto" />
        <h1 className="prose-lg lg:prose-2xl pt-4 text-center">Ultimate Fighting Championship Stats Tracker</h1>
        <ul className="prose list-disc">
          <li className="">
            See current rankings
          </li>
          <li>
            Upcoming and past seasons
          </li>
          <li>
            Competition & fighter details
          </li>
        </ul>
      </div>
      <div className="sm:flex flex-row justify-end hidden">
        <Image src="/fighters/male.png" alt="UFC Male Fighters" priority={true} width={500} height={500} className="w-1/2 h-auto max-w-md" />
        <Image src="/fighters/female.png" alt="UFC Female Fighter" priority={true} width={500} height={500} className="w-1/2 h-auto max-w-md" />
      </div>
    </div>
  )
}
