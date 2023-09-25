export default function DarkMode() {


  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };



  const toggleColorTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };
  return (
    <div className="dark-mode-container flex flex-col gap-2">
      <input
        type="checkbox"
        className="dark-mode"
        id="darkmode-toggle"
        onChange={toggleColorTheme}
      />
    </div>
  );
}
