import { Champions, Rankings } from "@/types";

interface TableProps {
  data: Champions | Rankings, tableType: keyof typeof tableHeaders
}

const tableHeaders = {
  home: [
    { label: "Weight Class", key: "weight class" },
    { label: "Name", key: "name" },
    { label: "Abbreviation", key: "abbreviation" },
    { label: "Gender", key: "gender" }
  ],
  rankings: [
    { label: "Weight Class", key: "weight class" },
    { label: "Abbreviation", key: "abbreviation" },
    { label: "Gender", key: "gender" },
  ],
  competitions: [
    { label: "Competition", key: "competition.name" },
    { label: "Date", key: "competition.date" },
    { label: "Location", key: "competition.location" },
    { label: "Winner", key: "winner.name" }
  ]
}

export default function Table({ data, tableType }: TableProps) {

  const checkData = (data: Champions | Rankings) => {
    if (data) {
      if ('categories' in data) {
        return (
          data?.categories[0]?.weight_classes?.map((champion, index) => (
            <tr key={index}>
              <td>{champion.description}</td>
              <td>{champion.competitor.name}</td>
              <td>{champion.competitor.abbreviation}</td>
              <td>{champion.competitor.gender}</td>
            </tr>
          ))
        )
      } else if ('rankings' in data) {
        return (
          <div>
            <tr>{
              data?.rankings?.map((ranking, index) => (
                <td key={index}>
                  <td>{ranking.name}</td>
                  {
                    ranking.competitor_rankings?.map((fighter, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{fighter.competitor.name}</td>
                        <td>{fighter.competitor.abbreviation}</td>
                        <td>{fighter.competitor.gender}</td>
                      </tr>
                    ))
                  }
                </td>
              ))
            }</tr>
          </div>
        )
      }
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="table-compact table w-full table-auto">
        <thead>
          <tr>
            {tableHeaders[tableType]?.map((header, index) => (
              <th key={index}>{header.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            checkData(data)
          }
        </tbody>
      </table>
    </div>
  )
}

