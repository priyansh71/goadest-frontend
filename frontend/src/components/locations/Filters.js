import {useState} from 'react'
import OptionFilter from './OptionFilter'
import RadiusFilter from './RadiusFilter'

function Filters() {

    const [radius, setRadius] = useState(0);
    const handleChange = (e) => {
        setRadius(e.target.value);
    }
    

    return (
        <div>
            <RadiusFilter onChange={handleChange} radius={radius} />
        </div>
    )
}

export default Filters
