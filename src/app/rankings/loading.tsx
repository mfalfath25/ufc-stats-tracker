import { Loader } from "lucide-react"

export default function Loading() {
  return (
    <div className="align-center flex h-screen items-center justify-center mx-auto">
      <Loader
        color="white"
        size={24}
        strokeWidth={3}
        className="animate-spin"
      />
    </div>
  )
}
