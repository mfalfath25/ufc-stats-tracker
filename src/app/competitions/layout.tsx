import TableCompetitions from "@/components/TableCompetitions";
import { dummyCompetition } from "@/dummy";

export default function CompetitionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const data = await fetcher('competitions')
  const x = dummyCompetition

  return <section>
    <kbd className="kbd w-full text-lg font-bold capitalize rounded-none">Competitions</kbd>
    {/* <TableCompetitions data={x}>
      {children}
    </TableCompetitions> */}
  </section>;
}