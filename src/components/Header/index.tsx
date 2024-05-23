import { usePrefs } from "../../context/prefs-context";
import "./style.css";

export const Header: React.FC = () => {
  const { veganOnly, setVeganOnly } = usePrefs();

  return (
    <header className="header">
      <button className={`check`} onClick={() => setVeganOnly(!veganOnly)}>
        {veganOnly ? "✓" : ""}
      </button>
      <span className="setting__content">Jen veganské ingredience</span>
    </header>
  );
};
