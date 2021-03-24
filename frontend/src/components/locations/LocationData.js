function LocationData({placename, address, description, typeofplace}) {
    const distance = 10; // calculate distance
    return (
        <div>
            <h2>{placename}</h2>
            <p>{address}</p>
            <p>{description}</p>
            <p>Type of location: {typeofplace}</p>
            <p>Distance from campus: {distance}</p>
        </div>
    )
}

export default LocationData