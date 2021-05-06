import styles from './Location.module.css'

const OptionFilter = ({ onChange, option }) => {

    return (
        <div className={styles.options}>
            <label>Type of Location:</label>
            <div className="options">
                <input type='radio' name='options' id='beach' value='beach' onChange={onChange} checked={option === 'beach'} />
                <span><label for='beach'>Beach</label></span>
            </div>

            <div className="options">
                <input type='radio' name='options' id='heritage' value='heritage' onChange={onChange} checked={option === 'heritage'} />
                <span><label for='heritage'>Heritage</label></span>
            </div>

            <div className="options">
                <input type='radio' name='options' id='nature' value='nature' onChange={onChange} checked={option === 'nature'} />
                <span><label for='nature'>Nature</label></span>
            </div>

            <div className="options">
                <input type='radio' name='options' id='all' value='all' onChange={onChange} checked={option === 'all'} />
                <span><label for='all'>All</label></span>
            </div>
        </div>
    )
}

export default OptionFilter
