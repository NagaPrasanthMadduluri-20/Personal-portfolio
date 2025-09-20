import React from "react";

const RandomList = () => {
  const skillmatrix = [
    "alen",
    "karthik",
    "bhanu",
    "eswar",
    "raju",
    "remo",
    "mark",
  ];
  const colors = ["bg-red-400", "bg-green-200", "bg-orange-400", "bg-gray-200"];

  function colorsIndex(index) {
    colors.map((color) => color);
  }

  return (
    <ul>
      {skillmatrix.map((item, index) => (
        <li
          key={item}
          className={`text-[25px] font-bold ${colorsIndex(index)}}`}
        >
          {item.slice(0, 1).toUpperCase()}
        </li>
      ))}
    </ul>
  );
};

export default RandomList;
