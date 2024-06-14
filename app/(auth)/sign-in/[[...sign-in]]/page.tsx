import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <h2 className="text-2xl">Войти в свой аккаунт</h2>
      <SignIn path="/sign-in" />
    </>
  );
}
