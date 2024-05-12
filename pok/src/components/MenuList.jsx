import { useState } from "react";
import MenuItem from "./MenuItem";

function MenuList({ foodItems }) {
  return (
    <>
      {foodItems.map((foodItem) => (
        <MenuItem foodItem={foodItem} />
      ))}
    </>
  );
}

export default MenuList;
