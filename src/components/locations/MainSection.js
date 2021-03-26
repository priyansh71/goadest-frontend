import LocationData from './LocationData'

const MainSection = ({ locations }) => {
    return (
        <div>
            Main Section
            {locations && locations.map((location) => {
                return (
                    <div key={location._id} >
                        <LocationData
                            placename={location.placename}
                            address={location.address}
                            description={location.description}
                            typeofplace={location.typeofplace}
                            latitude={location.latitude}
                            longitude={location.longitude}
                        />
                    </div>)
            })}

        </div>
    )
}

export default MainSection
