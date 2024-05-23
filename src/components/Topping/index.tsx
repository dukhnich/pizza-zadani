import React from "react";
import Check from "../Check";
import ITopping from "../../models/Topping";
import "./style.css";

interface IToppingProps {
  topping: ITopping;
  onSelect: (value: boolean) => void;
}

const Topping: React.FC<IToppingProps> = ({ topping, onSelect }) => {
  return (
    <div className="topping">
      <Check
        value={topping.selected}
        vegan={topping.vegan}
        onSelect={onSelect}
      />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
