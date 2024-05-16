import { useState, useEffect } from "react";

import ITopping from "../../models/Topping";
import Topping from "../Topping";
import "./style.css";

interface IToppingsSelectProps {
  toppings: ITopping[];
}

interface ResultData {
  count: number;
  price: number;
}

const ToppingsSelect: React.FC<IToppingsSelectProps> = ({ toppings }) => {
  const [current, setCurrent] = useState<ITopping[]>([]);
  useEffect(() => {
    setCurrent([...toppings]);
  }, [toppings]);

  const changeSelect = (value: boolean, index: number) => {
    const copyToppings = [...current];
    copyToppings[index] = { ...copyToppings[index], selected: value };
    setCurrent(copyToppings);
  };

  const result = current.reduce(
    (acc: ResultData, topping: ITopping) => {
      if (!topping.selected) {
        return acc;
      }
      acc.count += 1;
      acc.price += topping.price;
      return acc;
    },
    { count: 0, price: 0 }
  );

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>
        Selected toppings: {result.count}, total price: {result.price} Euro
      </p>

      <div className="toppings">
        {current.map((topping, index) => (
          <Topping
            topping={topping}
            key={topping.name}
            onSelect={(value) => changeSelect(value, index)}
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
