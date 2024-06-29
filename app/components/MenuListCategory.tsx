"use-client";
import { useState } from "react";
import MenuListItem from "./MenuListItem";
import { FaChevronDown } from "react-icons/fa";
export default function MenuListCategory(props: { menuList: any }) {
  const { title, itemCards: items } = props.menuList;

  const [isTitleClicked, setIsTitleClicked] = useState<boolean>(true);

  return (
    <div>
      <button
        onClick={() => setIsTitleClicked((state) => !state)}
        className="flex items-center justify-between w-full"
      >
        <p>{title}</p>
        <FaChevronDown />
      </button>
      {isTitleClicked &&
        items &&
        items.map((res: any) => <MenuListItem item={res.card.info} />)}
    </div>
  );
}
