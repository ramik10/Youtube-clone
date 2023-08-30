import { VideoGrid } from "@/components/VideoGrid"
import { Drawer } from "@/components/Drawer"

export default function Home() {
  return (
    <div className="grid grid-cols-12">
      <div className="hidden md:block md:col-span-1">
      <Drawer />
      </div>
      <div className="ml-3 mr-2 col-span-12 md:col-span-11">
      <VideoGrid />
      </div>
    </div>  )
}
