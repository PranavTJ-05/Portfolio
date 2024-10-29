"use client"

import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-[1080px] mx-auto items-center">
        <div className="flex flex-1 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">Pranav TJ</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link 
              href="/blog" 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Blog
            </Link>
            <Link 
              href="/projects" 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Projects
            </Link>
            <Link 
              href="/work" 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Work
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}