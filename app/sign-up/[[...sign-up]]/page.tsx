import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SignUpClient, SignUpTrainer } from "./forms"

export default function Page() {
  return (
    <Tabs defaultValue="trainer">
      <TabsList className="w-full">
        <TabsTrigger className="w-full" value="client">
          Client
        </TabsTrigger>
        <TabsTrigger className="w-full" value="trainer">
          Trainer
        </TabsTrigger>
      </TabsList>
      <div className="mx-auto max-w-[600px] flex flex-col items-center space-y-3">
        <TabsContent value="client">
          <SignUpClient />
        </TabsContent>
        <TabsContent value="trainer">
          <SignUpTrainer />
        </TabsContent>
      </div>
    </Tabs>
  )
}
