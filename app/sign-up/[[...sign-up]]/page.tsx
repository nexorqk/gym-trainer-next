import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SignUpTrainer } from "./forms";

export default function Page() {
  return (
    <Tabs defaultValue="account">
      <TabsList className="w-full">
        <TabsTrigger className="w-60" value="account">
          Account
        </TabsTrigger>
        <TabsTrigger className="w-60" value="password">
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="account"
        className="mx-auto max-w-[600px] flex flex-col items-center space-y-3"
      >
        <SignUpTrainer />
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
}
