import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SignUpClient, SignUpTrainer } from "./forms"

export default function Page() {
  return (
    <Tabs defaultValue="trainer" className="w-full">
      <TabsList className="w-full">
        <TabsTrigger className="w-full" value="client">
          Client
        </TabsTrigger>
        <TabsTrigger className="w-full" value="trainer">
          Trainer
        </TabsTrigger>
      </TabsList>
      <div>
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
