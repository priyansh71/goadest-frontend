import styles from './Location.module.css'

const OptionFilter = ({onChange, option}) => {

    return (
        <div className={styles.options}>  
            <div>
                <input type='radio' name='options' id='beach' onChange={onChange} checked={option === 'beach'} />
                <label for='beach'>Beach</label>
            </div>
            
            <div>
                <input type='radio' name='options' id='heritage' onChange={onChange} checked={option === 'heritage'} />
                <label for='heritage'>Heritage</label>
            </div>

             <div>    
                <input type='radio' name='options' id='nature' onChange={onChange} checked={option === 'nature'} />
                <label for='nature'>Nature</label>
            </div>

            <div>
                <input type='radio' name='options' id='all' onChange={onChange} checked={option === 'all'} />
                <label for='all'>All</label>
            </div>
        </div>
    )
}

export default OptionFilter
