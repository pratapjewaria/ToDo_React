import "./ListItems.css";

const ListItems = (props) => {
  return (
    <div>
      <div className="listItem">{props.listName}</div>
    </div>
  );
};
export default ListItems;
