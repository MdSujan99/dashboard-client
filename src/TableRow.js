function TableRow({ tuple }) {
  return (
    <tr>
      <td>{tuple.id}</td>
      <td>{tuple.carrier}</td>
      <td>{tuple.shipment_status}</td>
      <td>{tuple.delivery_date}</td>
      <td>{tuple.promised_date}</td>
    </tr>
  );
}

export default TableRow;
