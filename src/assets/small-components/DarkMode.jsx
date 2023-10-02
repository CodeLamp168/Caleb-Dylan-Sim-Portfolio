import React, { useState } from 'react';

export default function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    setIsDarkMode(true);
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    setIsDarkMode(false);
  };

  const toggleColorTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  return (
    <div className="dark-mode-container flex flex-col gap-2 relative md:top-10 md:right-0">
      <label className="dark-mode-label translate-x-96 transition-transform left-5 sm:translate-x-0 md:bottom-6 md:left-0 md:-bottom-0; md:-right-0 md:-rotate-90 absolute whitespace-nowrap  text-sm" htmlFor="checkbox">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</label>
      <input
        type="checkbox"
        className="dark-mode transition-transform md:-rotate-90"
        id="darkmode-toggle"
        onChange={toggleColorTheme}
      />
    </div>
  );
}
