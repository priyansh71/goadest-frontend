import {useState} from 'react';
import MainSection from './MainSection'
import RadiusFilter from './RadiusFilter';
import OptionFilter from './OptionFilter';

const Location = () => {

    const [radius, setRadius] = useState(0);
    const [option, setOption] = useState('all')
    const handleChange_radius = (e) => {
        setRadius(e.target.value);
    }
    const handleChange_option = (e) => {
        setOption(e.target.id);
    }


    return (
        <div>
            <h2>Location Page</h2>
            <MainSection />
            <div>
                <RadiusFilter onChange={handleChange_radius} radius={radius}/>
                <OptionFilter onChange={handleChange_option} option={option} />
            </div>
        </div>
    )
}

export default Location
