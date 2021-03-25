<<<<<<< HEAD:src/components/Search.js
const Search = ({ value, onChange }) => {
=======
import styles from './Location.module.css'

const Search = ({value, onChange}) => {
>>>>>>> af877afd638e471e3529be12c8992c7ef09324ef:src/components/locations/Search.js

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitting: ${value}`)
        // Probably not needed. Will need to check performance and decide accordingly
    }

    return (
        <form onSubmit={handleSubmit}>
            
            <input className={styles.search} type='text' value={value} onChange={onChange} />
            <input id="button" type='submit' value='Submit' />
        </form>
    )

}

export default Search;