import Image from "next/image"

export default async function Home() {
  return (
    <div className="flex h-screen flex-grow flex-col items-center justify-center overflow-y-auto sm:justify-end">
      <div className="mb-10 flex flex-col items-center justify-center">
        <Image
          src={"/ufc.svg"}
          alt="UFC Logo"
          priority
          width={300}
          height={300}
          className="h-auto w-1/2 max-w-sm sm:w-full"
        />
        <h1 className="prose-lg pt-4 text-center font-bold lg:prose-2xl">
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
          src={"/fighters/male-fighters.webp"}
          alt="UFC Male Fighters Display"
          priority
          placeholder="blur"
          blurDataURL="none"
          width={500}
          height={500}
          className="h-auto w-1/2 max-w-lg"
        />
        <Image
          src={"/fighters/female-fighters.webp"}
          alt="UFC Female Fighters Display"
          priority
          placeholder="blur"
          blurDataURL="none"
          width={500}
          height={500}
          className="h-auto w-1/2 max-w-lg"
        />
      </div>
    </div>
  )
}
