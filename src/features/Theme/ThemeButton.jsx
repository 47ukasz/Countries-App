import { useState } from "react";

function ThemeButton() {
  const [isSwitched, setIsSwitched] = useState(false);

  function handleChangeTheme() {
    setIsSwitched((state) => !state);
    document.body.parentNode.classList.toggle("dark");
  }

  return (
    <button
      onClick={handleChangeTheme}
      className="rounded-lg px-2 py-1 text-base font-light sm:px-3 sm:py-2"
    >
      {isSwitched ? (
        <span className="space-x-1 sm:space-x-2">
          <i className="fa-regular fa-moon"></i> <span>Dark Mode</span>
        </span>
      ) : (
        <span className="space-x-1 sm:space-x-2">
          <i className="fa-regular fa-sun"></i> <span>Light Mode</span>
        </span>
      )}
    </button>
  );
}

export default ThemeButton;
