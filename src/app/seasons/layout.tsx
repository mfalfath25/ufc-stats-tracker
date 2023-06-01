import TableCompetitions from "@/components/TableCompetitions";
import { dummySeasons } from "@/dummy";

export default function SeasonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const data = await fetcher('competitions')
  const x = dummySeasons

  return (
    <section className="flex-grow flex flex-col items-start justify-start h-screen overflow-y-auto">
      <kbd className="kbd w-full text-lg font-bold capitalize rounded-none border border-red-500 mb-1">Seasons</kbd>
      <div className="flex flex-row w-full overflow-y-auto">
        <TableCompetitions data={x} />
        <div className="relative flex w-1/2 flex-grow overflow-y-auto">
          {children}
        </div>
      </div>
    </section>
  )
}