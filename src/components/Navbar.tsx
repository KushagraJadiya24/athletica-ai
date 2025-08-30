"use client";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { DumbbellIcon, HomeIcon, UserIcon, ZapIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const { isSignedIn } = useUser();

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-gray-950/70 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-12 py-3">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="p-1.5 bg-primary/10 rounded-md">
            <ZapIcon className="w-5 h-5 text-primary" />
          </div>
          <span className="text-xl font-bold font-mono text-gray-100">
            Athletica<span className="text-primary">-AI</span>
          </span>
        </Link>

        {/* NAVIGATION */}
        <div className="flex items-center gap-6">
          {isSignedIn ? (
            <>
              <Link
                href="/"
                className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <HomeIcon size={16} />
                <span>Home</span>
              </Link>
              <Link
                href="/generate-program"
                className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <DumbbellIcon size={16} />
                <span>Generate</span>
              </Link>
              <Link
                href="/profile"
                className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <UserIcon size={16} />
                <span>Profile</span>
              </Link>

              <Button
                asChild
                className="ml-2 bg-primary text-white hover:bg-primary/90 rounded-lg shadow-md"
              >
                <Link href="/generate-program">Get Started</Link>
              </Button>

              <UserButton afterSignOutUrl="/" />
            </>
          ) : (
            <>
              <SignInButton>
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 rounded-lg"
                >
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton>
                <Button className="bg-primary text-white hover:bg-primary/90 rounded-lg shadow-md">
                  Sign Up
                </Button>
              </SignUpButton>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
