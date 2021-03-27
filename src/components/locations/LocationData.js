import React from 'react'
import Styles from './Location.module.css'
import getDistfromCoords from '../../getdistance'
import { Container, Row } from 'react-bootstrap'

function LocationData({ placename, address, description, typeofplace, image, latitude, longitude }) {

    const distance = Math.trunc(getDistfromCoords(latitude.$numberDecimal, longitude.$numberDecimal))

    return (
        <div className={Styles.cell}>
            <br />
            <br />
            <center className={Styles.textContainer}>
                <h2>{placename}</h2>
                <hr />
                <p>{description}</p>
                <p>Type of location: {typeofplace}</p>
                <p>Distance from campus: {distance} kms</p>
                <p>Address: {address}</p>
                <br />
                <br />
                <Container fluid>
                    <Row>
                        <img
                            className={Styles.img}
                            src={image}
                        />
                    </Row>

                </Container>
                <br />
                <br />
                <br />
                <center>
                    <iframe
                        title={placename}
                        className={Styles.map}
                        src={`https://maps.google.com/maps?q=${latitude.$numberDecimal},${longitude.$numberDecimal}&hl=en&z=12&amp;&output=embed`}
                        scrolling="yes"
                    >
                    </iframe>
                    <br />
                </center>
            </center>



            <br />



        </div>
    )
}

export default LocationData