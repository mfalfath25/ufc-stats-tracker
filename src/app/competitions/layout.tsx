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
    <TableCompetitions data={x}>
      {children}
    </TableCompetitions>
  </section>;
}