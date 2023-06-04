import { Loader } from "lucide-react"

export default function Loading() {
  return (
    <div className="align-center flex w-full items-center justify-center">
      <Loader
        color="white"
        size={24}
        strokeWidth={3}
        className="animate-spin"
      />
    </div>
  )
}
