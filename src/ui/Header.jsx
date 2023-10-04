import ThemeButton from "../features/Theme/ThemeButton";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center justify-between gap-1 bg-white px-3 py-4 dark:bg-[#2B3945] sm:px-8 sm:py-6 lg:px-20">
      <Link
        to="/"
        className="text-base font-bold text-stone-950 dark:text-white sm:text-lg md:text-3xl"
      >
        Where in the world?
      </Link>
      <ThemeButton />
    </header>
  );
}

export default Header;
