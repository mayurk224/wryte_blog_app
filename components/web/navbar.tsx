import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 ">
      <div className="leftSide flex items-center">
        <Link href="/">
          <div className="flex items-center">
            <img src="/logo.svg" alt="Wryte" className="h-8 mr-2" />
            <span className="text-xl font-bold">Wryte</span>
          </div>
        </Link>
        <div className="flex items-center">
          <Link href="/" className={buttonVariants({variant:"ghost"})}>
            <span className="">Recent</span>
          </Link>
          <Link href="/" className={buttonVariants({variant:"ghost"})}>
            <span className="">Technology</span>
          </Link>
          <Link href="/" className={buttonVariants({variant:"ghost"})}>
            <span className="">LifeStyle</span>
          </Link>
        </div>
      </div>
      <div className="rightSide flex items-center gap-3">
        <input type="text" placeholder="Search..." className="p-2 rounded-md" />
        <div className="">
        <Button variant="secondary">Create</Button>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/" className={buttonVariants()}>
            <span className="">Sign In</span>
          </Link>
          <Link href="/auth/sign-up" className={buttonVariants({variant: "secondary"})}>
            <span className="">Sign Up</span>
          </Link>
        </div>
        <div className="">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
