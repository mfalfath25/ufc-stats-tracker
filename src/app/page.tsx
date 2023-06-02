import Image from "next/image"
import ufcLogo from "@/public/ufc.svg"
import maleFighters from "@/public/fighters/male-fighters.webp"
import femaleFighters from "@/public/fighters/female-fighters.webp"

export default async function Home() {
  // Local images have to be imported in order to be optimized/detected as static assets
  return (
    <div className="flex-grow flex flex-col items-center sm:justify-end justify-center h-screen overflow-y-auto">
      <div className="mb-10 flex flex-col items-center justify-center">
        <Image src={ufcLogo} alt="UFC Logo" priority={true} width={300} height={300} className="w-1/2 sm:w-full max-w-sm h-auto" />
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
        <Image src={maleFighters} alt="UFC Male Fighters" priority={true} quality={80} width={500} height={500} className="w-1/2 h-auto max-w-lg" />
        <Image src={femaleFighters} alt="UFC Female Fighter" priority={true} quality={80} width={500} height={500} className="w-1/2 h-auto max-w-lg" />
      </div>
    </div>
  )
}
