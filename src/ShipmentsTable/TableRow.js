function TableRow(props) {
  // console.log(props.data);
  return (
    <tr>
      {props.data.map((row, index) => (
        <td>{row}</td>
      ))}
    </tr>
  );
}

export default TableRow;
