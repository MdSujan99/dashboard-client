import Card from "./Card";

function Shipment(props) {
  return (
    <li>
      <Card>
        {/* carrier */}
        <div>Carrier: {props.carrier}</div>
        {/* delivery_date*/}
        <div>Delivery Date: {props.delivery_date}</div>
        {/* id */}
        <div>Id: {props.id}</div>
        {/* promised_date */}
        <div>Promised Date: {props.promised_date}</div>
        {/* shipment_status */}
        <div>Shipment Status: {props.shipment_status}</div>
      </Card>
    </li>
  );
}

export default Shipment;
