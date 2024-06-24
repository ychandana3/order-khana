export default function MenuListCategory(props: { menuList: [{}] }) {
  return (
    <ul className="list-disc">
      {props.menuList.title}
      {props.menuList.itemCards.map((res) => (
        <li key={res.card.info.id}>{`${res.card.info.name} - ${
          res.card.info.price / 100
        } ₹`}</li>
      ))}
    </ul>
  );
}
