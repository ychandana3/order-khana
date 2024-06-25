import MenuListItem from "./MenuListItem";

export default function MenuListCategory(props: { menuList: [{}] }) {
  return (
    <ul className="list-disc">
      {props.menuList.title}
      {props.menuList.itemCards.map((res) => (
        <MenuListItem item={res.card.info} />
      ))}
    </ul>
  );
}
