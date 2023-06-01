import TableCompetitions from "@/components/TableCompetitions"
import { dummySeasons } from "@/dummy"
import Image from "next/image"

export default async function Home() {
  const x = dummySeasons

  return (
    <div className="flex-grow flex flex-col items-center justify-end h-screen overflow-y-auto">
      <div className="mb-10 flex flex-col items-center justify-center">
        <Image src="/ufc.svg" alt="UFC" className="w-full h-20" width={100} height={100} />
        <h1 className="text-2xl pt-4">Ultimate Fighting Championship Stats Tracker</h1>
      </div>
      <div className="flex flex-row justify-end">
        <Image src="/fighters/male.png" alt="UFC" className="" width={700} height={700} sizes="(max-width: 768px) 100vw" />
        <Image src="/fighters/female.png" alt="UFC" className="" width={700} height={700} sizes="(max-width: 768px) 100vw" />
      </div>
      {/* <kbd className="kbd w-full text-lg font-bold capitalize rounded-none border border-red-500 mb-1">Seasons</kbd>
      <TableCompetitions data={x} /> */}
    </div>
  )
}
