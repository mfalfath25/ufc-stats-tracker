import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex h-screen items-center align-center justify-center">
      <Loader color="white" size={24} strokeWidth={3} className="animate-spin" />
    </div>
  )
}