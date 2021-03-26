import styles from './Location.module.css'
const Search = ({ value, onChange }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Probably not needed. Will need to check performance and decide accordingly
    }

    return (
        <form onSubmit={handleSubmit}>

            <input className={styles.search} type='text' value={value} onChange={onChange} />
            <input id="button" type='submit' value='Search' />
        </form>
    )

}

export default Search;