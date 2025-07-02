"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Button } from "../ui/button";
import { ChevronLeftIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import { useSidebar } from "../ui/sidebar";
function Header() {
  const { user } = useUser();
  const { toggleSidebar, open, isMobile } = useSidebar();
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200">
      {/* Left Side */}
      <div className="flex items-center gap-2">
        {open && !isMobile ? (
          <ChevronLeftIcon className="w-6 h-6" onClick={toggleSidebar} />
        ) : (
          <div className="flex items-center gap-2">
            <MenuIcon onClick={toggleSidebar} />
            <Image
              src="/reddit-logo.png"
              width={50}
              alt="reddit logo"
              height={50}
            />
          </div>
        )}
      </div>
      {/* Right Side */}
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <Button asChild variant="outline">
            <SignInButton mode="modal" />
          </Button>
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
