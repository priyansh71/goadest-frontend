import {useState} from 'react';
import MainSection from './MainSection'
import RadiusFilter from './RadiusFilter';
import OptionFilter from './OptionFilter';

const Location = (seacrchValue) => {

    const [radius, setRadius] = useState(0);
    const [option, setOption] = useState('all')
    const handleChange_radius = (e) => {
        setRadius(e.target.value);
    }
    const handleChange_option = (e) => {
        setOption(e.target.id);
    }

    /*useEffect(() => {
        // I have radius, option and searchValue. Need to send these to backend
        // send(searchValue,radius,option)
        const recieve = '';// = recieve(from backend)
        const locations = JSON.parse(recieve);
        alert(`HELLO`);


    });*/

    const locations = [
        {
            key: 1,
            address: 'abc',
            description: 'abcdefgh',
            typeofplace: 'beach',
            latitude: 15.353334767659915,
            longitude: 73.7778551695931
        },
    ]


    return (
        <div>
            <h2>Location Page</h2>
            <MainSection locations={locations}/>
            <div>
                <RadiusFilter onChange={handleChange_radius} radius={radius}/>
                <OptionFilter onChange={handleChange_option} option={option} />
            </div>
        </div>
    )
}

export default Location
