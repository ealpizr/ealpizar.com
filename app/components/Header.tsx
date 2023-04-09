"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { routes } from "../routes";

// Change this to a named function after Next.js fixes issue 47704
// (see https://github.com/vercel/next.js/issues/47704)
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    // If we have many conditional classes in the future, we could use the 'classnames' library.
    <header
      className={`flex items-center justify-between py-6 px-10 sticky top-0 transition-all ${
        scrolled ? "bg-white dark:bg-[#1d1d20] shadow" : ""
      }`}
    >
      <h2 className="text-xl font-bold">ealpizar.com</h2>
      <nav className={"text-lg font-bold"}>
        <ul className="flex gap-6">
          {routes.map((route, idx) => {
            return (
              <li key={idx}>
                <Link
                  className="hover:text-[var(--fg-accent)] transition-all"
                  href={route.href}
                >
                  {route.displayName}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
