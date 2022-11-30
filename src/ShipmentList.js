import Shipment from "./Shipment";

function ShipmentList(props) {
  return (
    <ul>
      {
        // using the data in the props to make the content
        props.shipments.map((shipment) => (
          // map each shipment int a jsx item Shipment
          <Shipment
            carrier={shipment.id}
            delivery_date={shipment.delivery_date}
            id={shipment.id}
            promised_date={shipment.promised_date}
            shipment_status={shipment.shipment_status}
          />
        ))
      }
    </ul>
    // <div></div>
  );
}

export default ShipmentList;
