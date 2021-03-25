import {useState} from 'react';
import MainSection from './MainSection'
import RadiusFilter from './RadiusFilter';
import OptionFilter from './OptionFilter';
import Search from './Search';
import styles from './Location.module.css';

const Location = () => {

    const [radius, setRadius] = useState(100);
    const [option, setOption] = useState('all');
    const [searchValue, setSearchValue] = useState('');

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

    // Recieve data from backend, create an array of locations called 'locations'

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
        <>
            <div className={styles.searchHolder}>
                <Search value={searchValue} onChange={handleSearchChange}/>
            </div>
            <section className={styles.container}>
                <div className={styles.main}>
                <MainSection locations={locations}/>
                </div>
                <div className={styles.filters}>
                    <h4>Filters</h4>
                    <RadiusFilter onChange={handleChange_radius} radius={radius}/>
                    <OptionFilter onChange={handleChange_option} option={option} />
                </div>
            </section>
            
        </>
    )
}

export default Location
