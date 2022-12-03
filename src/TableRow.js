function TableRow(props) {
  console.log(Object.values(props));
  return <p>{Object.values(props.row)}</p>;
}

export default TableRow;
