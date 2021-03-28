import React from 'react'
import Styles from './Location.module.css'
import getDistfromCoords from '../../getdistance'
import { Container, Row } from 'react-bootstrap'

function LocationData({ placename, address, description, typeofplace, image, latitude, longitude }) {

    const distance = Math.trunc(getDistfromCoords(latitude.$numberDecimal, longitude.$numberDecimal))

    return (
        <div className={Styles.cell}>

            <center className={Styles.textContainer}>
                <div id="placename">{placename}</div>
                <hr />
                <br />
                <center>
                    <Container fluid>
                        <Row>
                            <img
                                className={Styles.img}
                                src={image}
                            />
                        </Row>
                    </Container>
                </center>
                <br />
                <hr />
                <p className="type">{description}</p>
                <p className="type"><span>Type of Location:- </span>{typeofplace}</p>
                <p className="type"><span>Distance from Campus:- </span>{distance} kilometers</p>
                <p className="type"><span>Address:- </span>{address}</p>

                <br />

                <div>
                    <iframe
                        title={placename}
                        className={Styles.map}
                        src={`https://maps.google.com/maps?q=${latitude.$numberDecimal},${longitude.$numberDecimal}&hl=en&z=12&amp;&output=embed`}
                        scrolling="yes"
                    >
                    </iframe>
                </div>
            </center>
        </div>
    )
}

export default LocationData