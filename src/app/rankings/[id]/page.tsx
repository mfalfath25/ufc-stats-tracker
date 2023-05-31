import BackButton from "@/components/BackButton"

export default async function ConpetitorDetail({ params }: { params: { id: string } }) {
  
  return (
    <div className="flex h-screen items-center align-center justify-center">
      <BackButton />
      <p>{
        params.id
        }</p>
    </div>
  )
}