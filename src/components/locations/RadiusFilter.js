
const RadiusFilter = ({ onChange, radius }) => {
    return (
        <label>
            Radius:
            <input type='range' min='5' max='100' value={radius} onChange={onChange} />
        </label>
    )
}

export default RadiusFilter
