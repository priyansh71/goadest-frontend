function LocationData(props) {
    const distance = 10; // calculate distance
    return (
        <div>
            <h2>{props.placename}</h2>
            <p>{props.address}</p>
            <p>{props.description}</p>
            <p>Type of location: {props.typeofplace}    Distance from campus: {distance}</p>
        </div>
    )
}