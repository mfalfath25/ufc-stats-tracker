import TableCompetitions from "@/components/TableCompetitions";
import { dummyCompetition, dummySeasons } from "@/dummy";

export default function SeasonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const data = await fetcher('competitions')
  const x = dummySeasons

  return <section>
    <kbd className="kbd w-full text-lg font-bold capitalize rounded-none border border-red-500 mb-1">Seasons</kbd>
    <TableCompetitions data={x}>
      {children}
    </TableCompetitions>
  </section>;
}