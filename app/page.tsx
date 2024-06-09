import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <div className="py-8 px-4 flex flex-col items-center justify-center space-y-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Welcome to the Gym Trainer App!
      </h1>
      <Image src="/logo.svg" alt="Logo" width={60} height={60} />
    </div>
  )
}
