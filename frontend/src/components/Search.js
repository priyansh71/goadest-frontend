import styles from './locations/Location.js'

const Search = ({value, onChange}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitting: ${value}`)
        // Probably not needed. Will need to check performance and decide accordingly
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className={styles.Search} type='text' value={value} onChange={onChange} />
            <input id="button" type='submit' value='Submit' />
        </form>
    )

}

export default Search;