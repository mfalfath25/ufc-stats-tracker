import Image from "next/image"
import ufcLogo from "@/public/ufc.svg"
import maleFighters from "@/public/fighters/male-fighters.webp"
import femaleFighters from "@/public/fighters/female-fighters.webp"

export default async function Home() {
  // Local images have to be imported in order to be optimized/detected as static assets
  return (
    <div className="flex h-screen flex-grow flex-col items-center justify-center overflow-y-auto sm:justify-end">
      <div className="mb-10 flex flex-col items-center justify-center">
        <Image
          src={ufcLogo}
          alt="UFC Logo"
          priority={true}
          width={300}
          height={300}
          className="h-auto w-1/2 max-w-sm sm:w-full"
        />
        <h1 className="prose-lg pt-4 text-center lg:prose-2xl">
          Ultimate Fighting Championship Stats Tracker
        </h1>
        <ul className="prose list-disc">
          <li className="">Current weight class rankings</li>
          <li>Upcoming and past seasons</li>
          <li>Competition & competitor details</li>
        </ul>
      </div>
      <div className="hidden flex-row justify-end sm:flex">
        <Image
          src={maleFighters}
          alt="UFC Male Fighters"
          priority={true}
          quality={80}
          width={500}
          height={500}
          className="h-auto w-1/2 max-w-lg"
        />
        <Image
          src={femaleFighters}
          alt="UFC Female Fighter"
          priority={true}
          quality={80}
          width={500}
          height={500}
          className="h-auto w-1/2 max-w-lg"
        />
      </div>
    </div>
  )
}
