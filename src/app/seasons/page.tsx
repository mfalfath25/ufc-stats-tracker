import TableCompetitions from "@/components/TableCompetitions"
import { dummySeasons } from "@/dummy"

export default async function Seasons() {
  const x = dummySeasons

  return (
    // <div className="flex flex-col flex-grow">
    //   <kbd className="kbd w-full text-lg font-bold capitalize rounded-none border border-red-500 mb-1">Seasons</kbd>
    //   <TableCompetitions data={x} />
    // </div>
    <div className="flex w-full items-center align-center justify-center">
      <p>Press <kbd className="kbd kbd-md"> Detail </kbd> for season info</p>
    </div>
  )
}