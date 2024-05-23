import "./style.css";

import { usePrefs } from "../../context/prefs-context";

interface CheckProps {
  value: boolean;
  vegan: boolean;
  onSelect: (value: boolean) => void;
}
const Check: React.FC<CheckProps> = ({ value, vegan, onSelect }) => {
  const { veganOnly } = usePrefs();

  return (
    <button
      className={`check ${veganOnly && !vegan ? "check--disabled" : ""}`}
      disabled={veganOnly && !vegan}
      onClick={() => onSelect(!value)}
    >
      {veganOnly}
      {value ? "✓" : ""}
    </button>
  );
};

export default Check;
