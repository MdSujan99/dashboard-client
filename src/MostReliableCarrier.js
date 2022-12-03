function MostReliableCarrier(props) {
  return (
    <div>
      <p>{props.carrier} is our most reliable carrier</p>
      <p>
        They have delivered {props.countDeliveredOnTime} out of{" "}
        {props.countPromised}
      </p>
    </div>
  );
}

export default MostReliableCarrier;
