import React from 'react'
import Styles from './Location.module.css'
import getDistfromCoords from '../../getdistance'
import { Container, Jumbotron } from 'react-bootstrap'

function LocationData({ placename, address, description, typeofplace, image, latitude, longitude }) {

    const distance = Math.trunc(getDistfromCoords(latitude.$numberDecimal, longitude.$numberDecimal))

    return (
        <div className="cover">
            <hr className="rule" />
            <Container fluid>
                <center>
                    <img
                        className={Styles.img}
                        src={image}
                    />
                </center>
            </Container>
            <br />

            <center className={Styles.textContainer}>
                <h2>{placename}</h2>
                <hr />
                <p>{description}</p>
                <p>Type of location: {typeofplace}
                    <br /> Distance from campus: {distance} kms</p>
                <p>Address: {address}</p>
            </center>
            <center>

                <iframe
                    title={placename}
                    className={Styles.map}
                    src={`https://maps.google.com/maps?q=${latitude.$numberDecimal},${longitude.$numberDecimal}&hl=en&z=12&amp;&output=embed`}
                    scrolling="yes"
                >
                </iframe>
            </center>

        </div>
    )
}

export default LocationData