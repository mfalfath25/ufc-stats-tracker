"use client"
import { useRouter } from "next/navigation"
import { ArrowBigLeft } from "lucide-react"

const BackButton = () => {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  return (
    <>
      <button onClick={handleGoBack}>
        <ArrowBigLeft size={24} strokeWidth={2} />
      </button>
    </>
  )
}

export default BackButton
