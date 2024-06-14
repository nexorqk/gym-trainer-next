import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SignUpClient, SignUpTrainer } from "./forms";

export default function Page() {
  return (
    <Tabs defaultValue="client" className="w-full">
      <TabsList className="w-full">
        <TabsTrigger className="w-full" value="client">
          Клиент
        </TabsTrigger>
        <TabsTrigger className="w-full" value="trainer">
          Тренер
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
  );
}
