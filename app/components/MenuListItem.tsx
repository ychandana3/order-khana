export default function MenuListItem(props: any) {
  return (
    <li key={props.item.id}>{`${props.item.name} - ${
      props.item.price / 100
    } ₹`}</li>
  );
}
