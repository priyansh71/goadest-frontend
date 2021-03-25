import styles from './Location.module.css'

const RadiusFilter = ({onChange, radius}) => {
    return (
        <div>
            <label>Radius: </label>
            <input className={styles.textbox} type='text' value={radius} onChange={onChange}/>
            <br />
            <input type='range' min='1' max='100' value={radius} onChange={onChange}/>
        </div>
    )
}

export default RadiusFilter
