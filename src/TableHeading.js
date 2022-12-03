function TableHeading(props) {
  console.log(props.columns);
  return (
    <div>
      {props.columns.map((item, index) => (
        <span>{" " + item + " "}</span>
      ))}
    </div>
  );
}

export default TableHeading;
