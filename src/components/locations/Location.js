import { useEffect, useState } from 'react';
import MainSection from './MainSection'
import RadiusFilter from './RadiusFilter';
import OptionFilter from './OptionFilter';
import axios from 'axios';

const Location = () => {

    const [radius, setRadius] = useState(0);
    const [option, setOption] = useState('');
    const [locations, setLocations] = useState(null);


    const handleChange_radius = (e) => {
        setRadius(e.target.value);
    }
    const handleChange_option = (e) => {
        setOption(e.target.id);
    }

    const callFn = () => {
        axios.get(`${process.env.REACT_APP_GOADEST_BACKEND}/travelplaces`).then((res) => {
            setLocations(res.data)
        }).catch((e) => {
            console.log(e.message)
        })
    }

    useEffect(() => {

        callFn();

    }, [])


    useEffect(() => {

        callFn();

    }, [setLocations])


    return (
        <div>
            <h2>Location Page</h2>
            <MainSection locations={locations} />
            <div>
                <RadiusFilter onChange={handleChange_radius} radius={radius} />
                <OptionFilter onChange={handleChange_option} option={option} />
            </div>
        </div>
    )
}

export default Location
