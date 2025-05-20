import { Star } from "lucide-react"

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
        <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center">
          <Star size={24} />
        </div>
        <h1 className="text-xl md:text-xl font-bold">مركز الطفولة المبكرة</h1>
      </div>
  )
}
