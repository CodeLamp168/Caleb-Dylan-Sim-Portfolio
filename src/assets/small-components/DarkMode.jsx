import React, { useState, useEffect } from 'react';

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
    const isChecked = e.target.checked;

    if (isChecked) {
      setDarkMode();
      localStorage.setItem('color-theme', 'dark');
      localStorage.setItem('checkbox-state', 'checked');
    } else {
      setLightMode();
      localStorage.setItem('color-theme', 'light');
      localStorage.setItem('checkbox-state', 'unchecked');
    }
  };

  useEffect(() => {
    const savedColor = localStorage.getItem('color-theme');
    const savedCheckboxState = localStorage.getItem('checkbox-state');
    const checktoggle = document.getElementById('darkmode-toggle');

    if (savedColor === 'dark') {
      setDarkMode();
    } else {
      setLightMode();
    }

    if (savedCheckboxState === 'checked' && checktoggle) {
      checktoggle.checked = true;
    }
  }, []);

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
