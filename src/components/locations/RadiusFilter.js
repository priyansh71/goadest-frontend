import './Location.module.css'

const RadiusFilter = ({ onChange, distance }) => {
    return (
        <label>
            Distance:
            <input type='range' min='5' max='100' value={distance} onChange={onChange} />
        </label>
    )
}

export default RadiusFilter
