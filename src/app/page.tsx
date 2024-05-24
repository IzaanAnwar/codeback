import { SignIn } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

export default function Home() {
  return (
    <main className="flex min-h-[90svh] w-full items-center justify-center p-4 ">
      <SignIn
        appearance={{ baseTheme: neobrutalism }}
        fallbackRedirectUrl={"/dashboard"}
      />
    </main>
  );
}
