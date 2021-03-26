import React from 'react'
import Styles from './Location.module.css'
import getDistfromCoords from '../../getdistance'

function LocationData({ placename, address, description, typeofplace, latitude, longitude }) {

    const distance = Math.trunc(getDistfromCoords(latitude.$numberDecimal, longitude.$numberDecimal))

    return (
        <div className={Styles.cell}>

            <div className={Styles.imgContainer}>
                <img
                    className={Styles.img}
                    src='https://images.unsplash.com/photo-1597820334272-af87b2d917c1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1383&q=80'
                />
            </div>

            <div className={Styles.textContainer}>
                <h2>{placename}</h2>
                <p>{description}</p>
                <p>Type of location: <b>{typeofplace}</b></p>
                <p>Distance from campus: <b>{distance}</b></p>
                <p>{address}</p>
            </div>

            <iframe 
                className={Styles.map}
                src={`https://maps.google.com/maps?q=${latitude},${longitude}&hl=en&z=12&amp;&output=embed`}
                width="150" 
                height="150" 
                scrolling="yes"
            >
            </iframe>

        </div>
    )
}

export default LocationData