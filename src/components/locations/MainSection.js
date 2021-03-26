import LocationData from './LocationData'

const MainSection = ({ locations }) => {
    return (
        <div>
            {locations && locations.map((location) => {
                return (
                    <div key={location._id} >
                        <LocationData
                            placename={location.placename}
                            address={location.address}
                            description={location.description}
                            typeofplace={location.typeofplace}
                            image={location.imageurl}
                            latitude={location.latitude.$numberDecimal}
                            longitude={location.longitude.$numberDecimal}
                        />
                    </div>)
            })}

        </div>
    )
}

export default MainSection
