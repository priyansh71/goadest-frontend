import Styles from './Location.module.css'

const RadiusFilter = ({ onChange, distance }) => {
    return (
        <center className="filter">
            <label> Distance (in kms from campus): </label>
            <br />
            <input className={Styles.textbox} type='text' value={distance} onChange={onChange} />
            <br />
            <input className={Styles.slider} type='range' min='5' max='100' value={distance} onChange={onChange} />
        </center>

    )
}

export default RadiusFilter
