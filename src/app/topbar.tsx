import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";
export function TopBar() {
  return (
    <nav className="font-sans w-full h-fit px-4 md:px-20 py-8 border-b-2 border-zinc-500 backdrop-blur flex justify-between items-center ">
      <div>Codeback</div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton appearance={{ baseTheme: neobrutalism }} />
      </SignedIn>
    </nav>
  );
}
