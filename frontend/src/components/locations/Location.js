import {useState} from 'react';
import {useRouteMatch} from 'react-router-dom';
import MainSection from './MainSection'
import RadiusFilter from './RadiusFilter';
import OptionFilter from './OptionFilter';
import Search from '../Search';

const Location = () => {

    const {path, url} = useRouteMatch();
    var startSearchValue = '';
    if(path.length > 12) {
        //console.log(url);
        alert(url);
        startSearchValue = url.substring(13);
        //console.log(startSearchValue);
    }

    const [radius, setRadius] = useState(100);
    const [option, setOption] = useState('all');
    const [searchValue, setSearchValue] = useState(startSearchValue);

    const handleChange_radius = (e) => {
        setRadius(e.target.value);
    }
    const handleChange_option = (e) => {
        setOption(e.target.id);
    }
    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
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
            <Search value={searchValue} onChange={handleSearchChange}/>
            <MainSection locations={locations}/>
            <div>
                <RadiusFilter onChange={handleChange_radius} radius={radius}/>
                <OptionFilter onChange={handleChange_option} option={option} />
            </div>
        </div>
    )
}

export default Location
