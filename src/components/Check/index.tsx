import './style.css';
interface CheckProps {
  value: boolean;
  onSelect: (value: boolean) => void;
}
const Check : React.FC<CheckProps> = ({value, onSelect})  => {
  return (
    <button
      className="check"
      onClick={() => onSelect(!value)}
    >
      {value ? '✓' : ''}
    </button>
  )
};

export default Check;
