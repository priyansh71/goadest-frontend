import { useEffect, useState } from 'react';
import MainSection from './MainSection'
import RadiusFilter from './RadiusFilter';
import OptionFilter from './OptionFilter';
import axios from 'axios';

const Location = () => {

    const [distance, setDistance] = useState(0);
    const [option, setOption] = useState('');
    const [locations, setLocations] = useState(null);

    const location = { distance, option };

    const handleChange_distance = (e) => {
        setDistance(e.target.value);
    }
    const handleChange_option = (e) => {
        setOption(e.target.id);
    }

    const handleFindDest = () => {

        axios({
            url: `${process.env.REACT_APP_GOADEST_BACKEND}/travelplaces`,
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            data: location
        }).then((res) => {
            setLocations(res.data)
        }).catch((e) => {
            console.log(e.message)
        })
    }


    return (
        <div>
            <h2>Location Page</h2>
            <MainSection locations={locations} />
            <div>
                <RadiusFilter onChange={handleChange_distance} distance={distance} />
                <OptionFilter onChange={handleChange_option} option={option} />
                <button onClick={handleFindDest} >FInd me a destination</button>
            </div>
        </div>
    )
}

export default Location
